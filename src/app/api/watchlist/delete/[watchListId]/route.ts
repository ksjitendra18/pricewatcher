import jwt from "jsonwebtoken";

import prisma from "@/app/utils/prisma";
import { cookies } from "next/headers";

export async function DELETE(
  req: Request,
  { params }: { params: { watchListId: string } }
) {
  const secret = process.env.JWT_SECRET;
  const cookieStore = cookies();
  const token = cookieStore.get("auth-token");

  try {
    if (token === undefined || token === null) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: No token provided" }),
        {
          status: 401,
        }
      );
    }
    const decoded: any = jwt.verify(token.value, secret!);

    const watchlistData = await prisma.watchlist.delete({
      where: { itemId: params.watchListId },
    });

    if (!watchlistData) {
      return new Response(JSON.stringify({ success: false }), {
        status: 404,
      });
    }

    if (decoded.userId !== watchlistData.userId) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (e: any) {
    console.log("error", e);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    });
    // throw new Error("Error in get watchlist " + e);
  }
}
