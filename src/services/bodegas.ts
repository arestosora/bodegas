import axios from "axios";
import { authState } from "./auth/auth";

const API_URL = '' // debe configurarse el common/axios.ts primero, con el url y luego aqui poner la ruta ejemplo /bodegas

export const getAll = async () => {
    const response = await axios.get(API_URL, {
        headers: {
            'Authorization': `Bearer ${authState.token}`
        }
    });
    return response.data;
};

export const createPost = async (content: any) => {
    const response = await axios.post(API_URL, {
        content,
    }, {
        headers: {
            'Authorization': `Bearer ${authState.token}`
        }
    });
    return response.data;
};