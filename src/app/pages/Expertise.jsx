"use client";
import Image from "next/image";
import React from "react";
export default function Expertise() {
  return (
    <section>
      <div className="md:flex my-18">
        <div className="flex-1"></div>
        <div className="flex-1">
          <p className="text-red-800 my-5">Our Expertise</p>
          <h2 className="text-5xl font-semibold text-red-800">
            Selecting the ideal elements to elevate your space
          </h2>
        </div>
      </div>
      {/* bottom  */}
      <div className="flex md:w-10/12 mx-auto gap-6">
        {/* left site image  */}
        <div className="flex-1">
          <Image
            src={"/assets/expertise/expertise-1.png"}
            width={500}
            height={300}
            alt="expertise image"
            className="rounded"
          />
        </div>
        {/* right site content */}
        <div className="w-full flex-1">
          <ol className="text-black space-y-5 w-full">
            <li className="hover:bg-red-800 w-full py-2 px-2 rounded text-3xl text-red-700 hover:text-white">
              Custom furniture Design
            </li>
            <li className="hover:bg-red-800 w-full py-2 px-2 rounded text-3xl text-red-800 hover:text-white">
              Room Decoration & Styling
            </li>
            <li className="hover:bg-red-800 w-full py-2 px-2 rounded text-3xl text-red-800 hover:text-white">
              Space Planning & Interior Layout
            </li>
            <li className="hover:bg-red-800 w-full py-2 px-2 rounded text-3xl text-red-800 hover:text-white">
              Custom furniture Design
            </li>
            <li className="hover:bg-red-800 w-full py-2 px-2 rounded text-3xl text-red-800 hover:text-white">
              Lighting Design
            </li>
            <li className="hover:bg-red-800 w-full py-2 px-2 rounded text-3xl text-red-800 hover:text-white">
              Virtual Interior Design Consultations
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
