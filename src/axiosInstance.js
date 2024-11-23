import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api", // 백엔드 API의 기본 URL
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;