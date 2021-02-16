import { Deal } from '~/entities/Deal'
import { DailyDealsSchema } from '~/models/DailyDeals'
import { DayPoints } from '~/services/DayPoints'

import { RegisterDailyDealsModule } from '../index'

export function createMongoRegisterDailyDealsModule(
  dayPoints: DayPoints
): RegisterDailyDealsModule {
  return {
    async register(deal: Deal): Promise<void> {
      const today = dayPoints.startOfDay(new Date())

      let dailyDeals = await DailyDealsSchema.findOne({
        day: { $gte: today, $lte: dayPoints.endOfDay(today) }
      })

      if (!dailyDeals) {
        dailyDeals = await DailyDealsSchema.create({ day: today })
      }

      const deals = [...dailyDeals.deals, deal]
      const amountValue = dailyDeals.amountValue + deal.value

      await DailyDealsSchema.updateOne({ _id: dailyDeals._id }, { deals, amountValue })
    }
  }
}
