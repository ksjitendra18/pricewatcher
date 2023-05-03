import intiliaseScrape from "@/app/apiHelpers/performScrape";
import { scrapeAmazon } from "@/app/apiHelpers/scrapeAmazon";
import { scrapeFlipkart } from "@/app/apiHelpers/scrapeFlipkart";
import prisma from "@/app/utils/prisma";
interface ItemDetails {
  itemId: string;
  itemProvider: string;
  itemPrice: number;
  itemUrl: string;
}
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

    itemDetails.forEach(async (itemDetail: ItemDetails) => {
      console.log("called", itemDetail);
      // async function performScrape(itemDetail: ItemDetails) {
      if (itemDetail.itemProvider === "amazon") {
        const productDetails = await scrapeAmazon(itemDetail.itemUrl);

        // if the new price of productDetails is lower than the current price then
        // update the itemPrice to new lower price
        // update the itemLowestPrice to new lower price
        // update the previous prices
        if (productDetails.price < itemDetail.itemPrice) {
          await prisma.watchlist.update({
            where: { itemId: itemDetail.itemId },
            data: {
              itemPrice: productDetails.price,
              itemPreviousPrice: itemDetail.itemPrice,
              itemLowestPrice: productDetails.price,
            },
          });

          await prisma.prices.create({
            data: {
              watchlistId: itemDetail.itemId,
              price: productDetails.price,
            },
          });
        } else if (productDetails.price > itemDetail.itemPrice) {
          // if the price is higher then
          // update current price
          // update highest price

          await prisma.watchlist.update({
            where: { itemId: itemDetail.itemId },
            data: {
              itemPreviousPrice: itemDetail.itemPrice,
              itemPrice: productDetails.price,
              itemHighestPrice: productDetails.price,
            },
          });

          await prisma.prices.create({
            data: {
              watchlistId: itemDetail.itemId,
              price: productDetails.price,
            },
          });
        }
      } else if (itemDetail.itemProvider === "flipkart") {
        const productDetails = await scrapeFlipkart(itemDetail.itemUrl);

        if (productDetails.price < itemDetail.itemPrice) {
          await prisma.watchlist.update({
            where: { itemId: itemDetail.itemId },
            data: {
              itemPrice: productDetails.price,
              itemPreviousPrice: itemDetail.itemPrice,
              itemLowestPrice: productDetails.price,
            },
          });

          await prisma.prices.create({
            data: {
              watchlistId: itemDetail.itemId,
              price: productDetails.price,
            },
          });
        } else if (productDetails.price > itemDetail.itemPrice) {
          // if the price is higher then
          // update current price
          // update highest price

          await prisma.watchlist.update({
            where: { itemId: itemDetail.itemId },
            data: {
              itemPrice: productDetails.price,
              itemPreviousPrice: itemDetail.itemPrice,
              itemHighestPrice: productDetails.price,
            },
          });

          await prisma.prices.create({
            data: {
              watchlistId: itemDetail.itemId,
              price: productDetails.price,
            },
          });
        }
      }
      // }
    });

    return new Response(JSON.stringify({ message: "Cron success" }), {
      status: 201,
    });
  } catch (e) {
    return new Response(JSON.stringify({ message: "Cron Failed", error: e }), {
      status: 500,
    });
  }
}

export const revalidate = 60;
