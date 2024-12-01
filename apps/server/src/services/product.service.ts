import { prisma } from "../lib/PrismaClient";
import { Product } from "../model/product.model";
import { Variant } from "../model/variant.model";

export class ProductService {
    async getAllProducts():Promise<Product> {
        return prisma.product.findMany({
            include: {
                variants:true
            },            
        });
        
    
    }
    async getProductById(id: number) {
        return prisma.product.findUnique({
            include: {
                variants:true
            },
            where:{ id } ,
        });
    }
    async createProduct(data: any) {
        console.log(data)
        return prisma.product.create({ data });
    }
    async updateProduct(id:number, data:any) {
        return prisma.product.update({ where: { id }, data});
    }
    async deleteProduct(id:number) {
        return prisma.product.delete({ where: { id }});
    }
}