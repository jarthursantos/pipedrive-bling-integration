import { Deal } from '~/entities/Deal'
import { SalesOrder } from '~/entities/SalesOrder'

export interface RegisterSalesOrderModule {
  register(deal: Deal): Promise<SalesOrder>
}
