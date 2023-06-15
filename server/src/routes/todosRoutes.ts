import express from "express";
import { todosController } from "../controllers/todosController";

const router = express.Router();

router.delete("/:id", todosController.deleteById);

router.get("/:id", todosController.getUserTodos);

router.post("/", todosController.createTodo);

router.post("/toggle", todosController.toggleTodo);

export default router;
