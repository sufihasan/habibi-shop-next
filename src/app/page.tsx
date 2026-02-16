import DemoCard from "@/components/pages/DemoCard/DemoCard";
import { ExclusiveDeals } from "@/components/pages/ExclusiveDeals/ExclusiveDeals";
import { HeroCarousel } from "@/components/pages/home/HeroCarousel";
import StayConnectedSection from "@/components/pages/StayConnectedSection/StayConnectedSection";
// import { DemoCard } from "@/components/pages/home/DemoCard/DemoCard";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      Hello
      <HeroCarousel />
      <ExclusiveDeals />
      {/* <DemoCard /> */}
      <StayConnectedSection />
    </div>
  );
}
