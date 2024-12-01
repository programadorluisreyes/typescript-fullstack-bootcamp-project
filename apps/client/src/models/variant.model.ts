import { z } from 'zod'

export const Variant = z.object({
    id: z.number(),
    productId: z.number(),
    color:z.string().nullable(),
    size: z.string().nullable(),
    stock:z.number(),
})

export type Variant = z.infer<typeof Variant>;