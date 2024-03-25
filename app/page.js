import Slider from "@/components/Slider";
import Image from "next/image";
import Products from "./products/page";

export default function Home() {
  return (
    <main className="">
      <div className="container">
        <Slider />
        <Products />
      </div>
    </main>
  );
}
