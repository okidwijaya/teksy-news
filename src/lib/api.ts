import axios from "axios";
import { error } from "console";
import { headers } from "next/headers";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    timeout: 35000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

api.interceptors.request.use((config) => {
    if (typeof window === "undefined") {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
},
    (error) => Promise.reject(error)
);

export default api;