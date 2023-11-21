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
    <div>
      <SideBar />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <p>FirstPage</p>
      <Link href={nextUrl}>Go to ${nextI} | Link</Link>
      <hr />
      <button onClick={navigateUsePush}>Go to ${nextI} | push</button>
      <hr />
      <button onClick={navigateUseReplace}>Go to ${nextI} | replace</button>
      <hr />
    </div>
  );
};
export default FirstPage;
