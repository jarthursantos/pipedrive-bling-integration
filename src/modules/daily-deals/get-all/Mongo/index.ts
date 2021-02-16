import { DailyDeals } from '~/entities/DailyDeals'
import { DailyDealsSchema } from '~/models/DailyDeals'

import { GetAllDailyDealsModule } from '../index'

export function createMongoGetAllDailyDealsModule(): GetAllDailyDealsModule {
  return {
    async getAll(): Promise<DailyDeals[]> {
      const dailyDeals = await DailyDealsSchema.find()

      return dailyDeals
    }
  }
}
