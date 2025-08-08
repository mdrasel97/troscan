import React from "react";
import NewsCard from "../pages/NewsCard";

export default async function News() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news.json`);
  const allNews = await res.json();
  //   console.log(allNews);
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {allNews.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
