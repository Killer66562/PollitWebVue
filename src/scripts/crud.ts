import axios, { type AxiosInstance } from "axios";
import type { CustomResponse } from "./models";

export class APIInstance {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:8000/", 
            timeout: 5000
        });
        this.instance.interceptors.request.use((request) => {
            const accessToken = localStorage.getItem("accessToken");
            if (accessToken) {
                request.headers.Authorization = `Bearer ${accessToken}`
            }
            return request;
        });
        this.instance.interceptors.response.use((response) => {
            return Promise.resolve(response);
        }, () => {
            return Promise.resolve(undefined);
        });
    }

    async GET<T> (url: string, params?: any): Promise<CustomResponse<T>> {
        const response = await this.instance.get(url, { params: params });
        if (response === undefined) {
            return { success: false, data: response };
        }
        return { success: true, data: response.data };
    }

    async POST<T, D> (url: string, data: D, params?: any): Promise<CustomResponse<T>> {
        const response = await this.instance.post(url, data, { params: params });
        if (response === undefined) {
            return { success: false, data: response };
        }
        return { success: true, data: response.data };
    }

    async PUT<T, D> (url: string, data: D, params?: any): Promise<CustomResponse<T>> {
        const response = await this.instance.put(url, data, { params: params });
        if (response === undefined) {
            return { success: false, data: response };
        }
        return { success: true, data: response.data };
    }

    async PATCH<T, D> (url: string, data: D, params?: any): Promise<CustomResponse<T>> {
        const response = await this.instance.patch(url, data, { params: params });
        if (response === undefined) {
            return { success: false, data: response };
        }
        return { success: true, data: response.data };
    }

    async DELETE<T> (url: string, params?: any): Promise<CustomResponse<T>> {
        const response = await this.instance.delete(url, { params: params });
        if (response === undefined) {
            return { success: false, data: response };
        }
        return { success: true, data: response.data };
    }

    async POSTForm<T, D> (url: string, data: D, params?: any): Promise<CustomResponse<T>> {
        const response = await this.instance.postForm(url, data, { params: params });
        if (response === undefined) {
            return { success: false, data: response };
        }
        return { success: true, data: response.data };
    }

    async PUTForm<T, D> (url: string, data: D, params?: any): Promise<CustomResponse<T>> {
        const response = await this.instance.putForm(url, data, { params: params });
        if (response === undefined) {
            return { success: false, data: response };
        }
        return { success: true, data: response.data };
    }

    async PATCHForm<T, D> (url: string, data: D, params?: any): Promise<CustomResponse<T>> {
        const response = await this.instance.patchForm(url, data, { params: params });
        if (response === undefined) {
            return { success: false, data: response };
        }
        return { success: true, data: response.data };
    }
}