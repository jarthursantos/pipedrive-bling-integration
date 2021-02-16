import { Deal } from '~/entities/Deal'

export interface GetNonRegisteredWonDealsModule {
  getNonRegistered(): Promise<Deal[]>
}
