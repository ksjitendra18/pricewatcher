"use client";

import Head from "next/head";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { URL } from "../utils/url";

import useAuthStore from "../store/authStore";
import { useRouter } from "next/navigation";
import Loading from "@/loading";
import LoadingSpinner from "../components/loadingSpinner";
import { Loader } from "../components/loader";
export default function Login() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const userEmailRef = useRef<HTMLInputElement>(null);
  const userPasswordRef = useRef<HTMLInputElement>(null);

  const { setUser } = useAuthStore();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    setError({ errorMessage: "", isError: false });

    const res = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userEmailRef.current?.value,
        password: userPasswordRef.current?.value,
      }),
    });

    const resData: {
      success?: boolean;
      message: string;
      data: {
        id: number;
        userId: string;
        email: string;
      };
    } = await res.json();

    if (res.status === 400) {
      setError({ isError: true, errorMessage: resData.message });
      setLoading(false);
    }
    console.log(res.status);

    if (res.status === 200 && resData.success === true) {
      setUser(resData.data);
      setLoading(false);
      router.push("/watchlist");
    }
  }

  console.log("loading is", loading);
  return (
    <section className="flex flex-col mt-20 items-center justify-center">
      <Head>
        <title>Login | Price Watcher</title>
      </Head>
      <h2 className="text-5xl font-semibold">Login</h2>

      <form className="md:w-[500px] mt-10 md:mx-auto" onSubmit={handleLogin}>
        <div className="w-full ">
          <label
            htmlFor="email"
            className={`${error.isError ? `text-red-600` : ""} block`}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            ref={userEmailRef}
            className={`${
              error.isError
                ? `outline-none border-2 border-solid border-red-500 `
                : "border border-primary"
            }  w-full  rounded-lg px-3 py-2 text-black`}
            required
          />
        </div>
        <div className="w-full mt-3 ">
          <label
            htmlFor="password"
            className={`${error.isError ? `text-red-600` : null} block`}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="6+ characters"
            id="password"
            name="password"
            ref={userPasswordRef}
            className={`${
              error.isError
                ? `outline-none border-2 border-solid border-red-500`
                : "border border-primary focus-visible:bg-gray-100"
            } w-full  rounded-lg px-3 py-2 text-black`}
            required
          />

          {error.isError ? (
            <div className="flex gap-3 bg-red-600 py-2 px-4 text-white rounded-lg mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-alert-triangle"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <line x1="12" x2="12" y1="9" y2="13"></line>
                <line x1="12" x2="12.01" y1="17" y2="17"></line>
              </svg>
              <p>{error.errorMessage}</p>
            </div>
          ) : null}
        </div>

        <div className="flex justify-end mt-5">
          <button
            disabled={loading ? true : false}
            className={` px-5 py-2 rounded-lg bg-primary text-white`}
          >
            {loading ? (
              <div className="flex gap-2 ">
                <Loader /> Login
              </div>
            ) : (
              "Login"
            )}
          </button>
        </div>

        <p className="mt-5">
          Don&apos;t have an account?{" "}
          <span className="font-semibold">
            <Link href="/signup">Signup</Link>
          </span>
        </p>
      </form>
    </section>
  );
}
