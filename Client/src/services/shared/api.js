import axios from "axios";

export const TOKEN_KEY = "@api_rest";
export const getToken = () => localStorage.getItem(TOKEN_KEY);

const api = axios.create({
  baseURL: "", //pegando pela proxy no package.json "http://localhost:5000"
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log(config.headers.Authorization);
  return config;
});

export default api;
