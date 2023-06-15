import dotenv from "dotenv";
import express from "express";
import { cors } from "./middlewares/cors";
import { helmet } from "./middlewares/helmet";
import authRoutes from "./routes/authRoutes";
import todosRoutes from "./routes/todosRoutes";
import ip from "ip";
import { isProduction } from "./utils/env.utils";

dotenv.config();

const app = express();

app.use(helmet);
app.use(cors);
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/todos", todosRoutes);

const __port__ = process.env.PORT || 5000;

if (!isProduction()) {
  console.log("[DEBUG]:", ip.address());
}

app.listen(__port__, () => console.log(`listening on ${__port__}...`));
