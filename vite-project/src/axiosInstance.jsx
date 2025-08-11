import axios from "axios";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        alert("인증이 필요합니다. 로그인 해주세요.");
      } else if (status === 500) {
        alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    } else {
      alert("네트워크 오류가 발생했습니다.");
    }

    return Promise.reject(error);
  }
);

export default instance;
