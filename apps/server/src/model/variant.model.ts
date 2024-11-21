import { Product } from "./product.model"

export type Variant = {
    id          :number
    productId   :number
    color       :string
    size        :string
    stock       :number
    product     :Array<Product>
  }
