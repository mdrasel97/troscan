"use client";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <div className="w-[900px] mx-auto h-[400px] flex items-center justify-center">
        <h2 className="text-8xl text-center mt-22 text-[#8d493a]">
          Crafting Timeless Spaces with Style
        </h2>
      </div>
      <div className="w-11/12 mx-auto my-10 min-h-screen ">
        <Image
          src={"/assets/aboutPage.png"}
          alt="aboutPage "
          width={100}
          height={100}
          className="w-full rounded"
        />
      </div>
    </div>
  );
}
