import HeroSections from "@/components/HeroSections";
import Navbar from "@/components/Navbar";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSections />
      <Services />
    </div>
  );
}
