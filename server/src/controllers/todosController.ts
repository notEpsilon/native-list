import { Request, Response } from "express";
import prisma from "../prisma";

const getUserTodos = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  try {
    const todos = await prisma.todo.findMany({
      where: {
        userId,
      },
    });

    res.status(200).json({ todos });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const deleteById = async (req: Request, res: Response) => {
  const todoId = parseInt(req.params.id);

  try {
    await prisma.todo.delete({
      where: {
        id: todoId,
      },
    });

    res.status(200).json({ msg: "todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const createTodo = async (req: Request, res: Response) => {
  const { title, userId }: { title: string; userId: number } = req.body;

  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        userId,
        done: false,
      },
    });

    res.status(201).json({ todo });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const todosController = { getUserTodos, createTodo, deleteById };
