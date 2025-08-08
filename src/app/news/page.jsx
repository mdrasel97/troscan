import React from "react";
import NewsCard from "../pages/newsCard/NewsCard";

export default async function NewsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news.json`);
  const allNews = await res.json();
  //   console.log(allNews);
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
