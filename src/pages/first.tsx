"use client";
import { SideBar } from "@/app/components/Sidebar";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
// import { useQueryState } from "next-usequerystate";

export const dynamic = "force-dynamic";
const Page = () => {
  const searchParams = useSearchParams();
  const iterator = searchParams?.get("i") || "0";
  const iteratorInt = parseInt(iterator);
  const nextI = iteratorInt + 1;
  // const [name, setName] = useQueryState("name", { history: "push" });

  const nextUrl = `/first?i=${nextI}`;

  const router = useRouter();

  const navigateUsePush = () => {
    router.push(nextUrl);
  };

  const navigateUseReplace = () => {
    router.replace(nextUrl);
  };

  const urlUpdates = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("i", nextI.toString());
    window.history.pushState({}, "", url.toString());
  };

  useEffect(() => {
    // subscribe on url changes
    const handleRouteChange = () => {
      console.log("route change");
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <div className="flex gap-3 flex-col items-start ">
      <SideBar />

      <div className="p-4 flex gap-3 flex-col items-start">
        <p className="font-bold">FirstPage</p>
        <p>Page state using useSearchParams: {iteratorInt}</p>
        {/*<p>Page state using useQueryState: {name}</p>*/}
        <p>searchParams name: {searchParams?.get("name")}</p>

        <hr className="border w-full" />

        <Link className="border bg-blue-500 p-2 text-white" href={nextUrl}>
          Go to {nextUrl} | Link tag
        </Link>
        <button className="border bg-blue-500 p-2 text-white" onClick={navigateUsePush}>
          Go to {nextUrl} | useRouter.push()
        </button>
        <button className="border bg-blue-500 p-2 text-white" onClick={navigateUseReplace}>
          Go to {nextUrl} | useRouter.replace()
        </button>
        <button className="border bg-blue-500 p-2 text-white" onClick={urlUpdates}>
          Go to {nextUrl} | window.history.pushState
        </button>

        {/*
        <label>
          change useQueryState:
          <input
            className="border border-neutral-900"
            value={name || ""}
            type="number"
            onChange={(e) => setName(e.target.value, { history: "push" })}
            placeholder="name"
          />
        </label>
        */}
      </div>
    </div>
  );
};
export default Page;
