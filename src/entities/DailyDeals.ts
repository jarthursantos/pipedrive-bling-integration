import { Deal } from './Deal'

export interface DailyDeals {
  day: Date
  deals: Deal[]
  amountValue: number
}
