import { API_KEY, API_URL } from '~/configs/Bling'
import { Consumer } from '~/entities/Consumer'
import { Deal } from '~/entities/Deal'
import { SaleItem } from '~/entities/SaleItem'
import { SalesOrder } from '~/entities/SalesOrder'
import { RegisterDailyDealsModule } from '~/modules/daily-deals/register'
import { RegisterProductsModule } from '~/modules/products/register'
import { HTTPRequest } from '~/services/HTTPRequest'
import { XMLParser } from '~/services/XMLParser'

import { RegisterSalesOrderModule } from '../index'
import { BlingRegisterSalesOrderResponse } from './Response'

export function createBlingRegisterSalesOrderModule(
  request: HTTPRequest,
  xmlParser: XMLParser,
  registerProductsModule: RegisterProductsModule,
  registerDailyDealsModule: RegisterDailyDealsModule
): RegisterSalesOrderModule {
  function generateXML(consumer: Consumer, items: SaleItem[]): string {
    return xmlParser.fromJSON(
      'pedido',
      {
        cliente: { nome: consumer.name },
        itens: items.map(({ product, quantity, value }) => ({
          item: {
            codigo: product.id,
            descricao: product.description,
            qtde: quantity,
            vlr_unit: value
          }
        }))
      }
    )
  }

  return {
    async register(deal: Deal): Promise<SalesOrder> {
      const product = await registerProductsModule.register({ description: deal.title })

      const consumer: Consumer = deal.organization
      const items: SaleItem[] = [{ product, quantity: 1, value: deal.value }]

      const xml = generateXML(consumer, items)

      const response = await request.post<BlingRegisterSalesOrderResponse>(
        `${API_URL}/pedido/json`,
        {},
        { query: { apikey: API_KEY, xml } }
      )

      const [{ pedido: { numero } }] = response.retorno.pedidos

      const number = parseInt(numero)
      const salesValue = items.reduce((amount, { quantity, value }) => amount + (quantity * value), 0)

      const salesOrder: SalesOrder = { number, consumer, items, salesValue }

      await registerDailyDealsModule.register(deal)

      return salesOrder
    }
  }
}
