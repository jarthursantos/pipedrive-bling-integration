import { Consumer } from '~/entities/Consumer'
import { SaleItem } from '~/entities/SaleItem'

export interface SalesOrder {
  number: number
  consumer: Consumer
  items: SaleItem[]
  salesValue: number
}
