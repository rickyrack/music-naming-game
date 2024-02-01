import axios from 'axios';
import auth from '../config/firebase';

const api = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL
});

const getIdToken = async () => {
    try {
        const user = auth.currentUser;
        if (user) {
            return await user.getIdToken(true);
        }
        return null;
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return null;
    }
};

api.interceptors.request.use(async (config) => {
    const idToken = await getIdToken();
    if (idToken) {
        config.headers['Authorization'] = `Bearer ${idToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export { api };