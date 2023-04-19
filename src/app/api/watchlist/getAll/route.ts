import jwt from "jsonwebtoken";
import prisma from "@/app/utils/prisma";
import checkAuth from "@/app/utils/checkAuth";
import { cookies } from "next/headers";

const secret = process.env.JWT_SECRET;
export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get("auth-token");

  try {
    console.log("token inside try", token);
    if (token === undefined || token === null) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: No token provided" }),
        {
          status: 401,
        }
      );
    }
    const decoded: any = jwt.verify(token.value, secret!);

    const allWatchlist = await prisma.watchlist.findMany({
      where: { userId: decoded.userId },
    });

    if (allWatchlist.length < 1) {
      return new Response(JSON.stringify({ data: [] }), {
        status: 200,
      });
    }

    return new Response(JSON.stringify({ data: allWatchlist }), {
      status: 200,
    });
    // res.status(200).json({ success: true, data: allWatchlist });
  } catch (e: any) {
    console.log("encountered error", e);
    return new Response(JSON.stringify({ success: false }), {
      status: 200,
    });
    throw new Error("Error in get all watchlist " + e);
  }
}
