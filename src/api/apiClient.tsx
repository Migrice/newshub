import axios, { AxiosInstance } from "axios";
import config from "../../config";

const apiClient: AxiosInstance = axios.create({
  baseURL: config.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
