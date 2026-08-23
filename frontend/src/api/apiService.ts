import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

import Config from "../config/config";

export const axiosClient = axios.create({
  baseURL: Config.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// GET
export async function axiosGet<R = unknown>(
  path: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<R>> {
  return axiosClient.get<R>(path, config);
}

// POST
export async function axiosPost<D = unknown, R = unknown>(
  path: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<R>> {
  return axiosClient.post<R>(path, data, config);
}

// PUT
export async function axiosPut<D = unknown, R = unknown>(
  path: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<R>> {
  return axiosClient.put<R>(path, data, config);
}

// PATCH
export async function axiosPatch<D = unknown, R = unknown>(
  path: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<R>> {
  return axiosClient.patch<R>(path, data, config);
}

// DELETE
export async function axiosDelete<R = unknown>(
  path: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<R>> {
  return axiosClient.delete<R>(path, config);
}