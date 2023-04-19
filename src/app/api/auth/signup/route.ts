import { customAlphabet } from "nanoid";

import bcrypt from "bcrypt";
import prisma from "@/app/utils/prisma";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
export async function POST(request: Request) {
  const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    15
  );

  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = await request.json();

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 400,
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await prisma.user.create({
    data: {
      userId: nanoid(),
      email,
      password: hashedPassword,
    },

    select: {
      id: true,
      userId: true,
      email: true,
    },
  });

  const token = jwt.sign({ id: user.id, userId: user.userId }, secret!, {
    expiresIn: "24h",
  });

  const res = JSON.stringify({
    success: true,
    message: "Signed up",
  });

  const date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

  return new Response(res, {
    status: 200,
    headers: {
      "Set-Cookie": `auth-token=${token}; Expires=${date.toUTCString()} ; Path=/`,
    },
  });
}
