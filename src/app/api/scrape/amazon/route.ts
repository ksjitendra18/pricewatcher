import saveToDb from "@/app/apiHelpers/saveToDb";
import { scrapeAmazon } from "@/app/apiHelpers/scrapeAmazon";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { url }: { url: string } = await req.json();

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

    const productData = await scrapeAmazon(url);

    const savedItemId = await saveToDb(token.value, productData, "amazon");

    return new Response(
      JSON.stringify({ productData, provider: "amazon", savedItemId }),
      {
        status: 200,
      }
    );
  } catch (e) {
    return new Response(JSON.stringify({ message: "Server Error" }), {
      status: 500,
    });
  }

  //   res.json({ productData, provider: "amazon", savedItemId });
}
