

import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import PricingCards from "@/components/SelfComponent/PricingCard";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { bikeTransport } from "@/constants/services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bike Transportation Services | Moving Packer",

  description:
    "Safe and affordable bike transportation services with secure packaging and timely delivery across India.",

  keywords: [
    "bike transport",
    "bike transportation",
    "motorcycle transport",
    "bike courier",
    "bike shifting",
    "two wheeler transport",
    "vehicle transport",
  ],
};


export default function BikeTransportPage() {
  return (
    <>
    

      <ServiceHero
        title={bikeTransport.title}
        description={bikeTransport.description}
        image={bikeTransport.image}
      />

      <ServiceOverview
        overview={bikeTransport.overview}
      />

      <IncludedServices
        title="What's Included"
        services={bikeTransport.includedServices}
      />

      <PricingCards
        pricing={bikeTransport.pricing}
      />

      <QuoteCTA />

      
    </>
  );
}