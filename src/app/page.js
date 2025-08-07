import Image from "next/image";
import Banner from "./pages/Banner";
import About from "./pages/About";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
    </div>
  );
}
