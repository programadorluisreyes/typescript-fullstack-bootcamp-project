import { Variant } from "./variant.model"
export type Product = {
    name: string,
    description: string,
    image: string,
    variants: Array<Variant>
}