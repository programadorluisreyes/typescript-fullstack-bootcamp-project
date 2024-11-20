import { Router } from 'express'
import { prisma } from '../db'

export const router = Router();

router.get('/', async (req, res) => {
    const products = await prisma.product.findMany()
    res.json(products);
})