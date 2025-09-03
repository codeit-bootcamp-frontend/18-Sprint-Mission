import axios from "axios";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const ERROR_STATUSCODE_MESSAGES = {
  401: "인증이 필요합니다. 로그인 해주세요.",
  403: "접근 권한이 없습니다.",
  404: "요청하신 리소스를 찾을 수 없습니다.",
  500: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      alert(
        ERROR_STATUSCODE_MESSAGES[status] || "알 수 없는 오류가 발생했습니다."
      );
    } else {
      alert("네트워크 오류가 발생했습니다.");
    }
    return Promise.reject(error);
  }
);

export default instance;
