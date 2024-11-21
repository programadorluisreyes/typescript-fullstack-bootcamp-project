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

    router.get('/:id', async function name(req, res, next){
        const id = parseInt(req.params.id)
        try {
            const result = await service.getProductById(id)
            return res.json({ result })
        }catch(error){
            next(error)
        }
    })

    router.post('/', async function name(req, res, next){
        const data = req.body;
        console.log(data)
        try {
            const result = await service.createProduct(data)
            return res.json({ result })
        }catch(error){
            next(error)
        }
    })

    router.put('/:id', async function name(req, res, next){
        const data = req.body;
        const id = parseInt(req.params.id)
        
        try {
            const result = await service.updateProduct(id, data)
            return res.json({ result })
        }catch(error){
            next(error)
        }
    })

}