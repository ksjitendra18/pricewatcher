"use client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuthStore from "../store/authStore";
import { useEffect, useState } from "react";

import { URL } from "../utils/url";
import { WatchlistType } from "../types/Watchlist";
import WatchListCard from "./watchListCard";
import LoadingSpinner from "../components/loadingSpinner";

export default function Watchlist() {
  const router = useRouter();
  const { user } = useAuthStore();

  const [loading, setLoading] = useState(true);

  const [allWatchList, setAllWatchList] = useState<WatchlistType[]>([]);

  // if (!user) {
  //   router.replace("/");
  // }

  const fetchAllWatchlist = async () => {
    const res = await fetch(`/api/watchlist/getAll`);
    const resData = await res.json();
    console.log(resData);

    setAllWatchList(resData.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllWatchlist();
  }, []);

  console.log("watchlist", allWatchList);

  return (
    <section>
      <Head>
        <title>Watchlist | Price Watcher</title>
      </Head>

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

      {loading ? (
        <div className="flex justify-center items-center mt-20">
          <LoadingSpinner />
        </div>
      ) : (
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
      )}
    </section>
  );
}
