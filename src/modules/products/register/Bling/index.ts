import { API_KEY, API_URL } from '~/configs/Bling'
import { Product } from '~/entities/Product'
import { HTTPRequest } from '~/services/HTTPRequest'
import { XMLParser } from '~/services/XMLParser'

import { RegisterProductsModule, RegisterProductDTO } from '../index'

import { BlingRegisterProductResponse } from './Response'

export function createBlingRegisterProductsModule(
  request: HTTPRequest,
  xmlParser: XMLParser
): RegisterProductsModule {
  return {
    async register(data: RegisterProductDTO): Promise<Product> {
      const { description } = data

      const xml = xmlParser.fromJSON('produto', { descricao: description })

      const response = await request.post<BlingRegisterProductResponse>(
        `${API_URL}/produto/json`,
        {},
        { query: { apikey: API_KEY, xml } }
      )

      const [{ produto: { id } }] = response.retorno.produtos[0]

      return { id, description }
    }
  }
}
