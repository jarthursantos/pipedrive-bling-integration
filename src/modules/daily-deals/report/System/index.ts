import { GetAllDailyDealsModule } from '~/modules/daily-deals/get-all'

import { DailyDealsReport, ReportDailyDealsModule } from '../index'

export function createSystemReportDailyDealsModule(
  getAllDailyDealsModule: GetAllDailyDealsModule
): ReportDailyDealsModule{
  return {
    async generate(): Promise<DailyDealsReport> {
      const dailyDeals = await getAllDailyDealsModule.getAll()

      const amountValue = dailyDeals.reduce((curr, daily) => daily.amountValue + curr, 0)

      return { dailyDeals, amountValue }
    }
  }
}
