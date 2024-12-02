import express, { Express } from "express";
import { CollectionService } from "../services/collection.service";

export function collectionsRoute(app: Express):void {
    const router = express.Router()
    app.use('/api/collections', router)
    const service = new CollectionService();

    router.get('/', async function name(req_, res, next){
        try {
            const result = await service.getAllCollections()
            return res.json(result)
        }catch(error){
            next(error)
        }
    })

    router.get('/:id', async function name(req, res, next){
        const id = parseInt(req.params.id)
        try {
            const result = await service.getCollectionById(id)
            return res.json(result)
            }catch(error){
                next(error)
            }
    })
    /*

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
        */
}