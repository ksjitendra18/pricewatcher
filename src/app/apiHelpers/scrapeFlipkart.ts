import axios from "axios";
import Product from "../types/Product";
import { load } from "cheerio";

const product: Product = { name: "", price: 0, link: "", imageUrl: "" };

export async function scrapeFlipkart(url: string) {
  const { data } = await axios.get(url);

  const $ = load(data);

  const item = $("div#container");
  product.name = $(item).find("h1 span.B_NuCI").text();
  product.link = url;

  product.imageUrl = $(item).find("img._2amPTt").attr("src");
  //   console.log("product name", product.name);

  const price = $(item)
    .find("div._30jeq3")
    .first()
    .text()
    .replace(/[^0-9]/g, "");

  const priceNum = parseFloat(price);
  // console.log("price", priceNum, typeof priceNum);
  product.price = priceNum;

  return product;
}
