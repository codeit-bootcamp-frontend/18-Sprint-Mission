import axios from "axios";

const BASE_URL = "https://assignment-todolist-api.vercel.app";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export default instance;
