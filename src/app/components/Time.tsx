"use client";
import React, { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const ampm:string = hour < 12 ? "am" : "pm";

      const currentTime = hour + ":" + minute + ':' + second + " " + ampm;
      setTime(currentTime);
    }, 1000);
  }, []);
  return (
    <div>
      <p className="top-0 animate-pulse mt-20 text-4xl font-medium">{time}</p>
    </div>
  );
}
