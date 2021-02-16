import { DailyDeals } from '~/entities/DailyDeals'

export interface DailyDealsReport {
  dailyDeals: DailyDeals[]
  amountValue: number
}

export interface ReportDailyDealsModule {
  generate(): Promise<DailyDealsReport>
}
