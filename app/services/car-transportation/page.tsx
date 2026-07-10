

import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";

import PricingCards from "@/components/SelfComponent/PricingCard";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { carTransport } from "@/constants/services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Transportation Services | Moving Packer",

  description:
    "Reliable car transportation services with insured vehicle transport and doorstep delivery across India.",

  keywords: [
    "car transport",
    "car transportation",
    "vehicle transport",
    "car carrier",
    "car shifting",
    "automobile transport",
    "car movers",
  ],
};

export default function CarTransportPage() {
  return (
    <>
      

      <ServiceHero
        title={carTransport.title}
        description={carTransport.description}
        image={carTransport.image}
      />

      <ServiceOverview
        overview={carTransport.overview}
      />

      <IncludedServices
        title="What's Included"
        services={carTransport.includedServices}
        />

      <PricingCards
        pricing={carTransport.pricing}
      />

      <QuoteCTA />

    
    </>
  );
}