import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Feature  from "@/components/Feature";
import Image from "next/image";
import GetApp from "@/components/GetApp";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Camp/>
     <Guide/>
     <Feature/>
     <GetApp/>
     
     

    </div>
  );
}
