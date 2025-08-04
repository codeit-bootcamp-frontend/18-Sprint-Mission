import axios from "axios";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
