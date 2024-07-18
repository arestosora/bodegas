import axios from "axios";
import { authState, saveAuthState } from "./auth";

export const login = async (credentials: { username: string; password: string }) => {
    try {
        const response = await axios.post('/auth/login', credentials);
        console.log('Login response:', response.data);
        if (response.data.token) {
            const userDetails = response.data;

            authState.isAuthenticated = true;
            authState.user = {
                id: userDetails.id,
                email: credentials.username,
            };
            authState.token = response.data.token;
            saveAuthState();
        } else {
            throw new Error('No token received');
        }
    } catch (error) {
        console.error('Login error:', error);
        authState.isAuthenticated = false;
        authState.user = null;
        authState.token = null;
        saveAuthState();
        throw error;
    }
};