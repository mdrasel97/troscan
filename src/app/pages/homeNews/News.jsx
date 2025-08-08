"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NewsCard from "../newsCard/NewsCard";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const HomeThreeData = data.slice(0, 3);
        setNews(HomeThreeData);
      });
  }, []);
  return (
    <div className="my-16 w-11/12 mx-auto">
      <p className="text-red-800 my-8">news</p>
      <div className="md:flex justify-between items-center my-10">
        <h2 className="text-red-800 text-5xl w-2/6">
          Stay Inspired with Interior Trends
        </h2>
        <Link
          href="/news"
          className="hidden md:inline-block bg-[#8d493a] text-white px-6 font-bold py-3 rounded hover:bg-[#ad5744]"
        >
          <button>View All News</button>
        </Link>
      </div>

      {/* card component */}
      <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-5">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
