import argon2 from "argon2";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as yup from "yup";
import prisma from "../prisma";
import { loginSchema, registerSchema } from "../validation/auth.validation";

type LoginInfo = yup.InferType<typeof loginSchema>;
type RegisterInfo = yup.InferType<typeof registerSchema>;

const register = async (req: Request, res: Response) => {
  const { email, password, confirmPassword }: RegisterInfo = req.body;

  try {
    const isValid = await registerSchema.isValid({
      email,
      password,
      confirmPassword,
    });

    if (!isValid) {
      return res.status(400).json({ err: "invalid registeration info" });
    }

    const hashedPassword = await argon2.hash(password);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.status(200).json({ id: user.id, email: user.email });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password }: LoginInfo = req.body;

  try {
    const isValid = await loginSchema.isValid({ email, password });

    if (!isValid) {
      return res.status(400).json({ err: "invalid login info" });
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ err: "invalid email/password" });
    }

    const correctPassword = await argon2.verify(user.password, password);

    if (!correctPassword) {
      return res.status(404).json({ err: "invalid email/password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET!, {
      expiresIn: "2 days",
    });

    res.status(200).json({ access_token: token });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const verifyToken = async (req: Request, res: Response) => {
  const { token }: { token: string } = req.body;

  try {
    jwt.verify(token, process.env.TOKEN_SECRET!);
    res.status(200).json({ valid: true });
  } catch (err) {
    if ((err as any).name === "TokenExpiredError") {
      res.status(200).json({ valid: false });
    } else {
      res.status(500).json({ err });
    }
  }
};

export const authController = { login, register, verifyToken };
