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

// Obtener un producto por su ID.
export const getProductById = async(id: number) => {
    try {
        const res = await api.get(`/product/${id}`);
        const product: Product[] = await res.data.payload;
        return product;
    } catch(e) {
        console.log(e);
        return [];
    }
}

// Actualizar el producto por su ID.
export const updateProduct = async(id: number, _prop: Product | undefined): Promise<void> => {
    try {
        await api.patch(`/product/${id}`, _prop);
    } catch(e) {
        console.log(e);
    }
}

// Borrar un producto por su ID.
export const deleteProduct = async (id: number): Promise<void> => {
    try {
        await api.delete(`/product/${id}`);
    } catch(e) {
        console.log(e);
    }
}