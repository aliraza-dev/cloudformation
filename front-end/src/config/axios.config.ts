import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_NODE_URL || "http://localhost:3001",
});

export default api;
