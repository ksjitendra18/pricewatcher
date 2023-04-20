import intiliaseScrape from "@/app/apiHelpers/performScrape";

export async function GET() {
  try {
    const itemDetails = await prisma.watchlist.findMany({
      select: {
        itemId: true,
        itemProvider: true,
        itemPrice: true,
        itemUrl: true,
      },
    });
    intiliaseScrape(itemDetails);
    return new Response(JSON.stringify({ message: "Cron success" }), {
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify({ message: "Cron Failed", error: e }), {
      status: 500,
    });
  }
}
