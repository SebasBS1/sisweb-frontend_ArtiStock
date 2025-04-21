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

// Obtener todos los productos
export const getTagId = async(id: string) => {
    try {
        const res = await api.get(`/category/${id}`);
        const tag: Tag[] = await res.data.payload;
        return tag;
    } catch(e) {
        console.log(e);
        return [];
    }
}