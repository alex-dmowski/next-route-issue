"use client";
import { SideBar } from "@/app/components/Sidebar";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const FirstPage = () => {
  const searchParams = useSearchParams();
  const iterator = searchParams?.get("i") || "0";
  const iteratorInt = parseInt(iterator);
  const nextI = iteratorInt + 1;

  const nextUrl = `/first?i=${nextI}`;

  const router = useRouter();

  const navigateUsePush = () => {
    router.push(nextUrl);
  };

  const navigateUseReplace = () => {
    router.replace(nextUrl);
  };

  return (
    <div className="flex flex-col gap-2 items-start">
      <SideBar />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <p>FirstPage</p>
      <Link
        href={nextUrl}
        style={{
          backgroundColor: "#c2c2c2",
          padding: "10px",
          margin: 10,
        }}
      >
        Go to ${nextI} | Link
      </Link>
      <hr />
      <button
        style={{
          backgroundColor: "#c2c2c2",
          padding: "10px",
          margin: 10,
        }}
        onClick={navigateUsePush}
      >
        Go to ${nextI} | push
      </button>
      <hr />
      <button
        style={{
          backgroundColor: "#c2c2c2",
          padding: "10px",
          margin: 10,
        }}
        onClick={navigateUseReplace}
      >
        Go to ${nextI} | replace
      </button>
      <hr />
    </div>
  );
};
export default FirstPage;
