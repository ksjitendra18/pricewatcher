import jwt from "jsonwebtoken";
import prisma from "@/app/utils/prisma";
const secret = process.env.JWT_SECRET;
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get("auth-token");

  try {
    console.log("inside try", token);

    if (token === undefined || token === null) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: No token provided" }),
        {
          status: 401,
        }
      );
    }
    const decoded: any = jwt.verify(token.value, secret!);

    const user = await prisma.user.findUnique({
      where: { userId: decoded.userId },
      select: { id: true, email: true, userId: true },
    });

    const res = JSON.stringify({ success: true, data: { user } });
    return new Response(res, {
      status: 200,
    });
  } catch (e: any) {
    throw new Error(e);
  }
}

// if (token === "undefined" || token === null) {
//   return res.status(401).json({ message: "Unauthorized" });
// } else {
//   const decoded: any = jwt.decode(token!);

//   res.status(200).json({ success: true, data: { userId: decoded.userId } });
// }
