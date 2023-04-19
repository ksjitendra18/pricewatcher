import saveToDb from "@/app/apiHelpers/saveToDb";
import { scrapeFlipkart } from "@/app/apiHelpers/scrapeFlipkart";
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

    const productData = await scrapeFlipkart(url);

    const savedItemId = await saveToDb(token.value, productData, "flipkart");

    return new Response(
      JSON.stringify({ productData, provider: "flipkart", savedItemId }),
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
