import Image from "next/image";
import Banner from "./pages/Banner";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import NewsCard from "./pages/NewsCard";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Expertise />
      <NewsCard />
    </div>
  );
}
