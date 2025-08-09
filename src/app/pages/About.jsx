"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 text-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Side: Content */}
        <div>
          {/* <p >About us</p> */}
          <li className="text-[#8d493a]">About us</li>
          <h2 className="text-3xl md:text-6xl font-semibold mb-6 mt-3 text-[#8d493a]">
            Where Spaces Inspire, and Design Comes Alive
          </h2>
          <p className=" mb-6 text-[#8d493a]">
            At Troscán, we believe that every space has a story to tell. As a
            premier furniture design and room decorating agency.
            <br />
            Our expert team blends timeless craftsmanship with innovative
            designs, ensuring each piece and layout reflects your unique taste
            and lifestyle. Whether you're looking to reimagine your living room.
          </p>
          <Link href="/about">
            <span className="inline-block bg-[#ad5744] hover:bg-[#c76954] text-white px-6 py-3 rounded font-semibold transition">
              More About us
            </span>
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/about.png"
            alt="About Us"
            width={500}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
