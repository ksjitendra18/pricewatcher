import Product from "./Product";

export default interface ScrapeResponseData {
  productData: Product;
  provider: "amazon" | "flipkart";
  savedItemId: string;
}
// savedItemId: { itemId: string };

interface SavedItemId {
  itemId: string;
}
