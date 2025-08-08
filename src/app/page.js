import Image from "next/image";
import Banner from "./pages/Banner";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import News from "./pages/News";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Expertise />
      <News />
    </div>
  );
}
