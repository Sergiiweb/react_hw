import axios, {AxiosError, AxiosResponse} from "axios";

import {baseURL} from "../constants";
import {authService} from "./authService";

type IRes<DATA> = Promise<AxiosResponse<DATA>>;

const apiService = axios.create({baseURL});

apiService.interceptors.request.use(req=>{
    const access = authService.getAccessToken();

    if (access) {
        req.headers.Authorization = `Bearer ${access}`;
    }

    return req;
});

let isRefreshing = false;
apiService.interceptors.response.use(
    res=>{
        return res;
    },
    async (error:AxiosError)=>{
        const originalRequest = error.config;

        if (error.response.status === 401){
            if (!isRefreshing){
                    isRefreshing = true;
                try {
                    await authService.refresh();
                    isRefreshing = false;
                    return apiService(originalRequest);
                }catch (e) {
                    authService.deleteTokens();
                    isRefreshing = false;
                    return Promise.reject(error);
                }
            }
        }

        return Promise.reject(error);
    }

)

export type {
    IRes
};

export {
    apiService
};