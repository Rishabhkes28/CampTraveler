import Camp from "@/Components/Camp";
import Guide from "@/Components/Guide";
import Hero from "@/Components/Hero";
import Feature  from "@/Components/Feature";
import Image from "next/image";
import GetApp from "@/Components/GetApp";

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
