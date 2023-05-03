import Link from "next/link";

import { cookies } from "next/headers";
import { WatchlistType } from "../types/Watchlist";
import WatchListCard from "./watchListCard";
import prisma from "../utils/prisma.ts";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const metadata = {
  title: "Watchlist | PriceWatchr",
};

const fetchWatchlists = async (userId: string): Promise<WatchlistType[]> => {
  const watchlists = await prisma.watchlist.findMany({
    where: { userId: userId },
  });
  return watchlists;
};

export default async function Watchlist() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth-token");

  const decoded: any = jwt.verify(token!.value, secret!);

  const allWatchList = await fetchWatchlists(decoded.userId);

  return (
    <section>
      <div className="flex items-center flex-col md:flex-row justify-between md:justify-start gap-5 mt-5 ">
        <h2 className="text-4xl text-primary font-semibold ">
          Your watchlists
        </h2>
        <Link
          className="bg-primary px-5 py-2 text-white rounded-lg"
          href="/watchlist/new"
        >
          Add new item to watchlist
        </Link>
      </div>

      <>
        {allWatchList?.length < 1 ? (
          <div className="mt-10 text-xl">
            <p>You have no watchlists yet. Add a new item to watchlist!</p>
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-5">
            {allWatchList?.map((watchlist) => (
              <WatchListCard key={watchlist.itemId} watchlist={watchlist} />
            ))}
          </div>
        )}
      </>
    </section>
  );
}
