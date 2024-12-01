import { z } from 'zod'
import { Variant } from './variant.model';
export const Product = z.object({
    id: z.number(),
    name: z.string(),
    description:z.string().nullable(),
    image: z.string().nullable(),
    price:z.number(),
    variants: Variant
})

export type Product = z.infer<typeof Product>;