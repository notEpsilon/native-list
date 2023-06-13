import dotenv from "dotenv";
import express from "express";
import { cors } from "./middlewares/cors";
import { helmet } from "./middlewares/helmet";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();

app.use(helmet);
app.use(express.json());
app.use(cors);

app.use("/api/v1/auth", authRoutes);

const __port__ = process.env.PORT || 5000;

app.listen(__port__, () => console.log(`listening on port ${__port__}...`));
