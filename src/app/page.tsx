import { FormEvent } from "react";
import Form from "./components/form";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-full mt-10 px-5 md:px-11 mx-auto flex flex-col items-center justify-center">
        <h2 className="text-5xl text-primary font-semibold mt-10">
          Shop Smartly
        </h2>
        <p className="mt-3 text-xl">
          Save money. Track the price and buy when it gets low!
        </p>

        <div className="flex mt-5 gap-5 md:flex-row flex-col">
          <Link
            href="/watchlist"
            className="bg-primary text-white px-7 py-2 rounded-lg"
          >
            Add products to watchlist
          </Link>
        </div>
      </section>
    </>
  );
}
