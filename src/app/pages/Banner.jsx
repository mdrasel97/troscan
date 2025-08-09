"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div
      className="relative h-[100vh] bg-cover bg-center flex items-center justify-center "
      style={{ backgroundImage: `url('/assets/banner.png')` }}
    >
      {/* Overlay for darker effect */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl md:w-4/6 mx-auto font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          Timeless Comfort & Endless Luxury
        </motion.h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-started">
            <button className="md:inline-block bg-white text-[#ad5744] px-6 font-bold py-3 rounded w-full">
              Our Vision
            </button>
          </Link>
          <Link href="/learn-more">
            <button className="md:inline-block w-full text-white hover:text-[#ad5744] px-6 font-bold py-3 rounded border border-white hover:bg-white">
              Explore Expertise
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
