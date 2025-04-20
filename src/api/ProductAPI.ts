import api from "./index";
import { Product } from "my-types";

// Obtener todos los productos
export const getAllProducts = async() => {
    try {
        const res = await api.get("/product");
        const products: Product[] = await res.data.payload;
        return products;
    } catch(e) {
        console.log(e);
        return [];
    }
}

// Obtener todos los productos
export const getProductById = async(id: string) => {
    try {
        const res = await api.get(`/product/${id}`);
        const product: Product[] = await res.data.payload;
        return product;
    } catch(e) {
        console.log(e);
        return [];
    }
}