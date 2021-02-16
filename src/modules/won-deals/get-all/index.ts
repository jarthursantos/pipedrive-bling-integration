import { Deal } from "~/entities/Deal";

export interface GetAllWonDealsModule {
  getAll(): Promise<Deal[]>
}
