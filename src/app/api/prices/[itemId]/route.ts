import prisma from "@/app/utils/prisma";
export async function GET(
  req: Request,
  { params }: { params: { itemId: string } }
) {
  const prices = await prisma.prices.findMany({
    where: { watchlistId: params.itemId },
    select: { price: true, watchlistId: true, updated_at: true },
  });

  return new Response(JSON.stringify({ success: true, prices: prices }), {
    status: 200,
  });
}
