import { Deal } from '~/entities/Deal'

import { DailyDealsSchema } from '~/models/DailyDeals'
import { GetAllWonDealsModule } from '~/modules/won-deals/get-all'

import { GetNonRegisteredWonDealsModule } from '../index'

export function createMongoGetNonRegisteredWonDealsModule(
  getAllWonDealsModule: GetAllWonDealsModule
): GetNonRegisteredWonDealsModule {
  return {
    async getNonRegistered(): Promise<Deal[]> {
      const allDeals = await getAllWonDealsModule.getAll()

      const dailyDeals = await DailyDealsSchema.find()

      const registeredDeals: Deal[] = dailyDeals.reduce<Deal[]>(
        (curr, { deals }) => [...curr, ...deals], []
      )

      const unregisteredDeals = allDeals.filter(deal => {
        const alreadyRegistered = registeredDeals.find(({ id }) => id === deal.id)

        return !alreadyRegistered
      })

      return unregisteredDeals
    }
  }
}
