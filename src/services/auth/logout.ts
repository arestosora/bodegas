import { authState, saveAuthState } from "./auth";

export const logout = () => {
    authState.isAuthenticated = false;
    authState.user = null;
    authState.token = null;
    saveAuthState();
};