import jwt from "jsonwebtoken";

import prisma from "@/app/utils/prisma";
import { cookies } from "next/headers";

export async function GET(
  req: Request,
  { params }: { params: { watchlistId: string } }
) {
  const secret = process.env.JWT_SECRET;
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

    const watchlistData = await prisma.watchlist.findUnique({
      where: { itemId: params.watchlistId },
    });

    if (!watchlistData) {
      return new Response(JSON.stringify({ success: true, data: null }), {
        status: 200,
      });
    }

    return new Response(
      JSON.stringify({ success: true, data: watchlistData }),
      {
        status: 200,
      }
    );
  } catch (e: any) {
    console.log("error", e);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    });
    // throw new Error("Error in get watchlist " + e);
  }
}
