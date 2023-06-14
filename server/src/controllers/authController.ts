import { Request, Response } from "express";
import * as yup from "yup";
import prisma from "../prisma";
import argon2 from "argon2";

const registerSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

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
      return res.status(400).json({ err: "invalid registeration data" });
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

const login = (req: Request, res: Response) => {};

export const authController = { login, register };
