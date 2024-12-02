import { Request, Response } from 'express';
import { CollectionService } from '../services/collection.service';
const collectionService = new CollectionService();

export class CollectionController {
    async getAllCollections(req:Request, res:Response) {
        const collections = await collectionService.getAllCollections();
        res.json(collections);
    }
    
    async getProductById(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const collection = await collectionService.getCollectionById(id);
        res.json(collection);
    }
    /*
    async deleteProduct(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await productService.deleteProduct(id);
        res.json({message:'deleted succesfully'});
    }
    async updateProduct(req:Request, res: Response) { // comment
        const id = parseInt(req.params.id);
        const productData = req.body;
        const product = await productService.updateProduct(id, productData);
        res.json(product);
    }
    async createProduct(req:Request, res: Response) {
        const productData = req.body;
        const product = await productService.createProduct(productData);
        res.json(product);
    }*/
}