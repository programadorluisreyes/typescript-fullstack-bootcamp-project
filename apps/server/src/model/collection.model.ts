import { Product } from "./product.model"

export type Collection = {
    id          :number
    name        :string
    products    :Array<Product>
  }