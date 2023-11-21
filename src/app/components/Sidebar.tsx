"use client";

import { useState } from "react";

export const SideBar = () => {
  console.log("SideBar render");
  const [internalIterator, setInternalIterator] = useState(0);

  return (
    <div>
      <p>Sidebar</p>
      <button onClick={() => setInternalIterator(internalIterator + 1)}>
        Internal Iterator: {internalIterator} | push to increment
      </button>
      <hr></hr>
    </div>
  );
};
