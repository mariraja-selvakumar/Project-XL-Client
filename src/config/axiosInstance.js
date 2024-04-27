import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVICE_CONTEXT,
});

axiosInstance.interceptors.request.use((req) => req);

axiosInstance.interceptors.response.use((res) => res);

export default axiosInstance;
