import { Product } from '~/entities/Product'

export interface SaleItem {
  product: Product
  quantity: number
  value: number
}
