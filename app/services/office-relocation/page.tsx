
import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import PricingCards from "@/components/SelfComponent/PricingCard";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { officeRelocation } from "@/constants/services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Relocation Services | Moving Packer",

  description:
    "Professional office relocation services for businesses with secure packing, transportation and setup across India.",

  keywords: [
    "office relocation",
    "office shifting",
    "commercial movers",
    "business relocation",
    "office movers",
    "corporate shifting",
    "office moving services",
  ],
};

export default function OfficeRelocationPage() {
  return (
    <>
      

      <ServiceHero
        title={officeRelocation.title}
        description={officeRelocation.description}
        image={officeRelocation.image}
      />

      <ServiceOverview
        overview={officeRelocation.overview}
      />

      <IncludedServices
        title="What's Included"
        services={officeRelocation.includedServices}
      />

      <PricingCards
        pricing={officeRelocation.pricing}
      />

      <QuoteCTA />

      
    </>
  );
}