import axios from "axios";
import Product from "../types/Product";
import { load } from "cheerio";

const product: Product = { name: "", price: 0, link: "", imageUrl: "" };

export async function scrapeAmazon(url: string) {
  // fetch the html
  const { data } = await axios.get(url);

  const $ = load(data);

  //   main container
  const item = $("div#dp-container");
  product.name = $(item).find("h1 span#productTitle").text();
  product.link = url;

  product.imageUrl = $(item).find("img#landingImage").attr("src");
  //   console.log("product name", product.name);

  const price = $(item)
    .find("span .a-price-whole")
    .first()
    .text()
    .replace(/[,.]/g, "");

  const priceNum = parseFloat(price);
  // console.log("price", priceNum, typeof priceNum);
  product.price = priceNum;

  return product;
}
