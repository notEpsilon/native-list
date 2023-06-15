import axios from "axios";
import { isProduction } from "../utils/env.utils";
import ip from "ip";

const axs = axios.create({
  baseURL:
    process.env.API_URL ||
    (!isProduction() ? `http://${ip.address()}:5000/api/v1` : ""),
});

export { axs };
