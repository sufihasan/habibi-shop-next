import DemoCard from "@/components/pages/home/DemoCard/DemoCard";
import EverydayEssentials from "@/components/pages/home/EverydayEssentials/EverydayEssentials";
import ExclusiveDeals from "@/components/pages/home/ExclusiveDeals/ExclusiveDeals";
import GroceryItems from "@/components/pages/home/GroceryItems/GroceryItems";
import { HeroCarousel } from "@/components/pages/home/HeroCarousel";
import StayConnectedSection from "@/components/pages/home/StayConnectedSection/StayConnectedSection";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <ExclusiveDeals />
      <EverydayEssentials />
      {/* <DemoCard /> */}
      <GroceryItems />
      <StayConnectedSection />


    </div>
  );
}
