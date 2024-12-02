import { Product } from "../models/Product.model";

export const getCollection = async (id: string): Promise<any> => {
    const response = await fetch(`http://localhost:5001/api/collections/${id}`)
    console.log(response)
    return await response.json();
}