import { create } from "axios";

// ENV Variables
const baseUrl = import.meta.env.VITE_API_URL;

const api = create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
