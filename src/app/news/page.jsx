"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "../pages/newsCard/NewsCard";

export default function NewsPage() {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data);
      });
  }, []);
  return (
    <div className="">
      <div className="w-[900px] mx-auto h-[400px] flex items-center justify-center">
        <h2 className="text-8xl text-center mt-22 text-[#8d493a]">
          Expert Insights and Design Inspiration
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {allNews.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
