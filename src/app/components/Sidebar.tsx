"use client";

import { useState } from "react";

export const SideBar = () => {
  console.log("SideBar render");
  const [internalIterator, setInternalIterator] = useState(0);

  return (
    <div style={{ border: "1px solid red" }}>
      <p>Sidebar</p>
      <button
        onClick={() => setInternalIterator(internalIterator + 1)}
        style={{
          backgroundColor: "#a9a9a9",
          padding: "10px",
          margin: 10,
        }}
      >
        Click to increment internal state in sidebar: {internalIterator}
      </button>
      <hr></hr>
    </div>
  );
};
