import prisma from "@/app/utils/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export async function POST(request: Request) {
  const { email, password }: { email: string; password: string } =
    await request.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return new Response(
      JSON.stringify({ message: "Invalid email or password" }),
      {
        status: 400,
      }
    );
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return new Response(
      JSON.stringify({ message: "Invalid email or password" }),
      {
        status: 400,
      }
    );
  }

  const token = jwt.sign({ id: user.id, userId: user.userId }, secret!, {
    expiresIn: "24h",
  });

  const { password: pwd, ...userInfo } = user;

  const res = JSON.stringify({
    success: true,
    message: "Logged in",
    data: userInfo,
  });

  // token expires after 1 day
  const date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

  return new Response(res, {
    status: 200,
    headers: {
      "Set-Cookie": `auth-token=${token}; Expires=${date.toUTCString()} ; Path=/`,
    },
  });
}
