"use client";
import Image from "next/image";
import React from "react";
export default function Expertise() {
  return (
    <section>
      <div className="md:flex my-18">
        <div className="flex-1"></div>
        <div className="flex-1">
          <p className="text-red-800">Our Expertise</p>
          <h2 className="text-5xl font-semibold text-red-800">
            Selecting the ideal elements to elevate your space
          </h2>
        </div>
      </div>
      {/* bottom  */}
      <div className="flex w-10/12 mx-auto">
        {/* left site image  */}
        <div>
          <Image
            src={"/assets/expertise/expertise-1.png"}
            width={400}
            height={500}
            alt="expertise image"
          />
        </div>
        {/* right site content */}
        <div>
          <ol className="text-black">
            <li>Custom furniture Design</li>
            <li>Custom furniture Design</li>
            <li>Custom furniture Design</li>
            <li>Custom furniture Design</li>
            <li>Custom furniture Design</li>
            <li>Custom furniture Design</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
