import express, { Express } from "express";


//import { ProductService } from "../services/product.service";
//import { ProductController } from "../controllers/product.controller";


export function productsRoute(app: Express):void {
    const router = express.Router()
    app.use('/api/products', router)


    //router.get('/', productController.getAllProducts);
    //router.get('/:id', productController.getProductById);

}