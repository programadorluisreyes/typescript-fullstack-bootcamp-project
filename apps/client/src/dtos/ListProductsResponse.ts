import { z } from 'zod'
import { Product } from '../models/Product.model'

export const ListProductsResponseSchema = z.object({
    status: z.enum(['success', 'error']),
    data: z.array(
        Product
    ),
});

export type ListProductsRes = z.infer<typeof ListProductsResponseSchema>;