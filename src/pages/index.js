
import Footer from "@/comps/footer/Footer";
import HeroSection from "@/comps/heroSection/HeroSection";
import Navbar from "@/comps/navbar/Navbar";
import ServiceOverview from "@/comps/serviceOverview/ServiceOverview";
import localFont from "next/font/local";
// import Navbar from "@/comps/navbar";


export default function Home() {
  return (
    <>
      

      <Navbar/>
      <HeroSection/>
      <ServiceOverview/>
      <Footer/>

    </>
  );
}
