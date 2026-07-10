import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import Pricing from "@/components/SelfComponent/Pricing";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { localShifting } from "@/constants/services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Shifting Services | Moving Packer",

  description:
    "Fast and affordable local shifting services for homes and offices with professional movers across India.",

  keywords: [
    "local shifting",
    "local movers",
    "same city moving",
    "city relocation",
    "home shifting",
    "office shifting",
    "local moving company",
  ],
};

export default function LocalShiftingPage() {
  return (
    <>
      <ServiceHero
        title={localShifting.title}
        description={localShifting.description}
        image={localShifting.image}
      />

      <ServiceOverview
        overview={localShifting.overview}
      />

      <IncludedServices
        title="What's Included"
        services={localShifting.includedServices}
      />

      <Pricing
        pricing={localShifting.pricing}
      />

      <QuoteCTA />
    </>
  );
}