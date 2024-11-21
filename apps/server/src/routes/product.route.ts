import express, { Express } from "express";
import { ProductService } from "../services/product.service";

export function productsRoute(app: Express):void {
    const router = express.Router()
    app.use('/api/products', router)
    const service = new ProductService();

    router.get('/', async function name(req_, res, next){
        try {
            const result = await service.getAllProducts()
            return res.json({ result })
        }catch(error){
            next(error)
        }
    })

}