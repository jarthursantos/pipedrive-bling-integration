import { Deal } from "~/entities/Deal";

export interface RegisterDailyDealsModule {
  register(deal: Deal): Promise<void>
}
