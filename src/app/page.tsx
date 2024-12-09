'use client'
import HeroSection from "./Herosection";
import NewArrival from "./components/NewArrival";
import ActionAreaCard from "./components/HappyCustomer";import Category from "./components/Category";
;

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <NewArrival heading="New Arrivals"/>
    <NewArrival heading="Top Selling"/>
    <Category/>
    <ActionAreaCard/>
   </div>
  );
}
