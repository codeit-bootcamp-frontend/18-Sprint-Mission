import axios, { AxiosResponse } from "axios";

const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const NEXT_PUBLIC_TENANTID = process.env.NEXT_PUBLIC_TENANTID;

export const instance = axios.create({
  baseURL: NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  config.baseURL = `${NEXT_PUBLIC_BACKEND_URL}/${NEXT_PUBLIC_TENANTID}`;

  return config;
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      console.error(
        "status: ",
        error.response?.status,
        "message: ",
        error.message
      );
    } else if (error instanceof Error) {
      console.error(error.message);
    }

    return Promise.reject(error);
  }
);
