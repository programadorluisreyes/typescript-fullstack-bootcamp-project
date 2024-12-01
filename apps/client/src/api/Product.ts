import { Product } from "../models/Product.model";

export const getProduct = async (id: string): Promise<Product> => {
    const response = await fetch(`http://localhost:5001/api/products/${id}`)
    console.log(response)
    return await response.json();
}