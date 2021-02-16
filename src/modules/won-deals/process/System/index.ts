import { RegisterSalesOrderModule } from '~/modules/sales-order/register'
import { GetNonRegisteredWonDealsModule } from '~/modules/won-deals/get-non-registered'

import { ProcessWonDealsModule } from '../index'

export function createSystemProcessWonDealsModule(
  getNonRegisteredWonDealsModule: GetNonRegisteredWonDealsModule,
  registerSalesOrderModule: RegisterSalesOrderModule
): ProcessWonDealsModule {
  return {
    async process() {
      const unregisteredDeals = await getNonRegisteredWonDealsModule.getNonRegistered()

      for (let index = 0; index < unregisteredDeals.length; index++) {
        const deal = unregisteredDeals[index]

        await registerSalesOrderModule.register(deal)
      }
    }
  }
}
