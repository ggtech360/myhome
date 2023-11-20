"use client";
import React, { useState } from "react";

export default function Searchbox() {
  const [searchbox, setSearchbox] = useState("");
  const handleClick = (event: any) => {
    var link: any = "https://duckduckgo.com/?q=" + searchbox;
    if (event.keyCode === 13) {
      window.location = link;
      setSearchbox('');
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden text-black">
      <input
        type="search"
        className="bg-inherit outline-none text-lg w-[39rem] px-4 py-4"
        value={searchbox}
        placeholder="Search Here on the Web"
        onChange={(e) => setSearchbox(e.target.value)}
        onKeyDown={handleClick}
      />
    </div>
  );
}
