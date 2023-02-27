import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
    baseURL: 'https://0dcb-2600-1700-4181-5f20-24f3-41de-60f6-6530.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;