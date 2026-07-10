

import HeroSection from "../components/SelfComponent/HeroSection";
import QuoteCTA from "../components/SelfComponent/QuoteCTA";
import ServiceSection from "@/components/SelfComponent/ServiceSection";
import WhyChooseUs from "@/components/SelfComponent/WhyChooseUs";
import StatsSection from "@/components/SelfComponent/StatsSection";
import CustomerReviews  from "@/components/SelfComponent/CustomerReview";
import FAQSection from "@/components/SelfComponent/FAQSection";
import CTASection from "@/components/SelfComponent/CTASection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moving Packer | Trusted Packers & Movers Across India",

  description:
    "Professional Packers & Movers offering Home Shifting, Office Relocation, Bike Transport, Car Transport, Packing & Unpacking, Local Shifting and Intercity Relocation across India.",

  keywords: [
    "packers and movers",
    "moving company",
    "home shifting",
    "office relocation",
    "bike transport",
    "car transport",
    "packing services",
    "local shifting",
    "intercity relocation",
    "moving services India",
    "professional movers",
    "house relocation",
  ],
};


export default function Home(){
  return(
    <>
    
    <HeroSection />
    <QuoteCTA />
    <ServiceSection />
    <WhyChooseUs />
    <StatsSection />
    <CustomerReviews />
    <FAQSection />
    <CTASection />
    



    </>
  )
}