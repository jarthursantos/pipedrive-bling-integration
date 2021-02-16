import { Product } from '~/entities/Product'

export interface RegisterProductDTO {
  description: string
}

export interface RegisterProductsModule {
  register(data: RegisterProductDTO): Promise<Product>
}
