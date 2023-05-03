import jwt from "jsonwebtoken";
import prisma from "@/app/utils/prisma";
const secret = process.env.JWT_SECRET;

export async function POST(request: Request) {
  const { cookie: token } = await request.json();

  try {
    if (token === undefined || token === null) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: No token provided" }),
        {
          status: 401,
        }
      );
    }
    const decoded: any = jwt.verify(token, secret!);

    const user = await prisma.user.findUnique({
      where: { userId: decoded.userId },
      select: { id: true, email: true, userId: true },
    });

    if (!user) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }

    const res = JSON.stringify({ success: true, data: { user } });
    return new Response(res, {
      status: 200,
    });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ message: "Unauthorized: Invalid Token" }),
      {
        status: 401,
      }
    );
  }
}
