import { API_KEY, API_URL } from '~/configs/Pipedrive'
import { Deal } from '~/entities/Deal'
import { Organization } from '~/entities/Organization'
import { DateParser } from '~/services/DateParser'
import { HTTPRequest } from '~/services/HTTPRequest'

import { GetAllWonDealsModule } from '../index'
import { PipedriveGetAllWonDealsResponse } from './Response'

export function createPipedriveGetAllWonDealsModule(
  request: HTTPRequest,
  dateParser: DateParser
): GetAllWonDealsModule {
  return {
    async getAll(): Promise<Deal[]>{
      const response = await request.get<PipedriveGetAllWonDealsResponse>(
        `${API_URL}/deals`,
        { query: { api_token: API_KEY, status: 'won', limit: 5 } }
      )

      const wonDeals: Deal[] = []

      if (response.success) {
        response.data.forEach(deal => {
          const { id, title, value, add_time, org_id } = deal

          const organization: Organization = { name: org_id.name }

          const createdAt = dateParser.fromString(add_time)

          wonDeals.push({ id, title, value, organization, createdAt })
        })
      }

      return wonDeals
    }
  }
}
