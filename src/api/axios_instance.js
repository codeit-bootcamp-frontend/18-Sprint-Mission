//axios instance

import axios from "axios";
const BASE_URL=import.meta.env.VITE_PRODUCT_BASE_URL;
const instance=axios.create({
  baseURL: BASE_URL,
});

export default instance;