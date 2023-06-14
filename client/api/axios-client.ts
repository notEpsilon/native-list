import axios from "axios";

const axs = axios.create({
  baseURL: process.env.API_URL || "http://192.168.1.6:5000/api/v1",
});

export { axs };
