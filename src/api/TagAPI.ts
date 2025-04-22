import api from "./index";
import { Tag } from "my-types";

// Obtener todos los productos
export const getAllTags = async() => {
    try {
        const res = await api.get("/category");
        const tags: Tag[] = await res.data.payload;
        return tags;
    } catch(e) {
        console.log(e);
        return [];
    }
}

// Obtener un producto por su ID.
export const getTagById = async(id: number) => {
    try {
        const res = await api.get(`/category/${id}`);
        const product: Tag[] = await res.data.payload;
        return product;
    } catch(e) {
        console.log(e);
        return [];
    }
}

// Actualizar el producto por su ID.
export const updateTag = async(id: number, _prop: Tag | undefined): Promise<void> => {
    try {
        await api.patch(`/category/${id}`, _prop);
    } catch(e) {
        console.log(e);
    }
}

// Borrar un producto
export const deleteTag = async (id: number): Promise<void> => {
    try {
        await api.delete(`/category/${id}`);
    } catch(e) {
        console.log(e);
    }
}