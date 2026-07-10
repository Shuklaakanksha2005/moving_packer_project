

import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import Pricing from "@/components/SelfComponent/Pricing";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { homeShifting } from "@/constants/services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Shifting Services | Moving Packer",

  description:
    "Professional home shifting services with safe packing, secure transportation and timely delivery across India.",

  keywords: [
    "home shifting",
    "house shifting",
    "home relocation",
    "house relocation",
    "residential movers",
    "home movers",
    "packers and movers",
    "moving services",
  ],
};




export default function HomeShiftingPage() {
  return (
    <>
      

      <ServiceHero
        title={homeShifting.title}
        description={homeShifting.description}
        image={homeShifting.image}
      />
      <ServiceOverview overview={homeShifting.overview} />

     <IncludedServices
       title="What's Included"
       services={homeShifting.includedServices}
        />

      <Pricing pricing={homeShifting.pricing} />
      
      <QuoteCTA />



    </>
  );
}