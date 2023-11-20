import Link from "next/link";
import React from "react";

export default function Links(props: any) {
  return (
    <Link
      className="p-7 border-2 text-5xl border-sky-400 transition-all hover:scale-105 duration-200 ease-in-out rounded-lg hover:bg-slate-600"
      href={props.link}
    >
      {props.children}
    </Link>
  );
}
