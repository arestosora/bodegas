import { reactive } from 'vue';

const savedAuthState = localStorage.getItem('authState');
const initialState = savedAuthState ? JSON.parse(savedAuthState) : { isAuthenticated: false, user: null, token: null };

export const authState = reactive({
  isAuthenticated: initialState.isAuthenticated,
  user: initialState.user,
  token: initialState.token,
});

export const saveAuthState = () => {
  localStorage.setItem('authState', JSON.stringify(authState));
};
