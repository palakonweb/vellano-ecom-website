import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Featured from "@/app/components/featured";
import Footer from "@/app/components/Footer";
import Craftsmanship from "@/app/components/Craftsmanship";
import Reviews from "./components/Reviews";
export default function Home() {
  return (
    <>
    <div className=" bg-black">
      <Navbar />
      <Hero />
       <Craftsmanship />
      <Featured />
     <Reviews />
      <Footer />
       </div>
    </>
   
  );
}
