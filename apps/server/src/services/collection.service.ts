import { prisma } from "../lib/PrismaClient";
import { Product } from "../model/product.model";
import { Variant } from "../model/variant.model";

export class CollectionService {
    async getAllCollections():Promise<Product> {
        return prisma.collection.findMany({
            include: {
                products:true,
            },  
        });
        
    
    }

    async getCollectionById(id: number) {
        return prisma.collection.findUnique({
            include: {
                products:true
                },
                where:{ id } ,
                });
            }
    /*
    async createProduct(data: any) {
        console.log(data)
        return prisma.product.create({ data });
    }
    async updateProduct(id:number, data:any) {
        return prisma.product.update({ where: { id }, data});
    }
    async deleteProduct(id:number) {
        return prisma.product.delete({ where: { id }});
    }*/
}