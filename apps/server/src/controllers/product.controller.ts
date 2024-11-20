import { Request, Response } from 'express';
import { ProductService } from "../services/product.service";
const productService = new ProductService();

export class ProductController {
    async getAllProducts(req:Request, res:Response) {
        const products = await productService.getAllProducts();
        res.json(products);
    }
    async getProductById(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const product = await productService.getProductById(id);
        res.json(product);
    }
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
    }
}