import { scrapeAmazon } from "./scrapeAmazon";
import { scrapeFlipkart } from "./scrapeFlipkart";

import prisma from "../utils/prisma";
interface ItemDetails {
  itemId: string;
  itemProvider: string;
  itemPrice: number;
  itemUrl: string;
}
function intiliaseScrape(itemDetails: ItemDetails[]) {
  itemDetails.forEach((item) => performScrape(item));
}

async function performScrape(itemDetail: ItemDetails) {
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
}

export default intiliaseScrape;
