"use client";

import { useState } from "react";

export const SideBar = () => {
  console.log("SideBar render");
  const [internalIterator, setInternalIterator] = useState(0);

  return (
    <div className="p-3 border w-full bg-orange-100" style={{ border: "1px solid red" }}>
      <p>Sidebar</p>
      <p>Internal sidebar state: {internalIterator} </p>
      <button
        className="bg-neutral-300 p-2"
        onClick={() => setInternalIterator(internalIterator + 1)}
      >
        Click to increment
      </button>
    </div>
  );
};
