"use client";
import Link from "next/link";
import React from "react";

const NewsCard = ({ item }) => {
  // console.log(item);
  return (
    <div>
      <Link href={""}>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <div className="overflow-hidden">
            <img
              // src={"/assets/about.png"}
              src={item.image}
              alt={"ha ha "}
              className="w-full h-52 object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-[#8d493a]">
              {item.heading}
            </h2>
            <p className=" text-[#8d493a]">{item.summary}</p>
            {/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Read More
        </button> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
