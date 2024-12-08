'use client'
import Image from "next/image";
import HeroSection from "./Herosection";
import NewArrival from "./components/NewArrival";
// import Category from "@/components/Category";
import ActionAreaCard from "./components/HappyCustomer";;

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <NewArrival heading="New Arrivals"/>
    <NewArrival heading="Top Selling"/>
    <ActionAreaCard/>
   </div>
  );
}
