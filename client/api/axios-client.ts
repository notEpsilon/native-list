import axios from "axios";
import { isProduction } from "../utils/env.utils";

const axs = axios.create({
  baseURL:
    process.env.API_URL ||
    (!isProduction() ? "http://192.168.1.7:5000/api/v1" : ""),
});

export { axs };
