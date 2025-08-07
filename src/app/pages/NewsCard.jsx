"use client";
import React from "react";

const NewsCard = ({ image, title, description }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div className="overflow-hidden">
        <img
          src={"/assets/about.png"}
          alt={title}
          className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
