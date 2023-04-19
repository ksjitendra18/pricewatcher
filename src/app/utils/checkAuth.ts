export default async function checkAuth() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/status`
  );
  const resData = await res.json();
  return resData;
}
// import Cookies from "js-cookie";
// import { URL } from "./url";

// export default async function checkAuth() {
//   const authToken = Cookies.get("auth-token");

//   console.log("check auth", authToken);
//   const res = await fetch(`/auth/status`, {
//     headers: { "auth-token": authToken! },
//   });
//   const resData = await res.json();
//   return resData;
// }
