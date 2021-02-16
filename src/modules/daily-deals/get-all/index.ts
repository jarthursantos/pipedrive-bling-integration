import { DailyDeals } from '~/entities/DailyDeals'

export interface GetAllDailyDealsModule {
  getAll(): Promise<DailyDeals[]>
}
