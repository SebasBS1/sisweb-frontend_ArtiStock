import api from "./index";
import { User } from "my-types";

// Obtener todos los productos
export const getAllUsers = async() => {
    try {
        const res = await api.get("/user");
        const users: User[] = await res.data.payload;
        return users;
    } catch(e) {
        console.log(e);
        return [];
    }
}

// Obtener un producto por su ID.
export const getUserById = async(id: number) => {
    try {
        const res = await api.get(`/user/${id}`);
        const user: User[] = await res.data.payload;
        return user;
    } catch(e) {
        console.log(e);
        return [];
    }
}

// Actualizar el producto por su ID.
export const updateUser = async(id: number, _prop: User | undefined): Promise<void> => {
    try {
        await api.patch(`/user/${id}`, _prop);
    } catch(e) {
        console.log(e);
    }
}

// Borrar un producto
export const deleteUser = async (id: number): Promise<void> => {
    try {
        await api.delete(`/user/${id}`);
    } catch(e) {
        console.log(e);
    }
}