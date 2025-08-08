import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <h2 className="text-7xl w-3/6 font-semibold mx-auto text-center text-[#8d493a] md:mt-28">
        Crafting Timeless Spaces with Style
      </h2>
      <div className="w-full min-h-screen">
        <Image
          src={"/assets/aboutPage.png"}
          alt="aboutPage "
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    </div>
  );
}
