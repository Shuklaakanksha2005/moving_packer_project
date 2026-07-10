import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import Pricing from "@/components/SelfComponent/Pricing";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { intercityRelocation } from "@/constants/services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intercity Relocation Services | Moving Packer",

  description:
    "Trusted intercity relocation services with safe packing, transportation and doorstep delivery across India.",

  keywords: [
    "intercity relocation",
    "intercity shifting",
    "long distance moving",
    "state to state movers",
    "house relocation",
    "interstate movers",
  ],
};

export default function IntercityRelocationPage() {
  return (
    <>
      <ServiceHero
        title={intercityRelocation.title}
        description={intercityRelocation.description}
        image={intercityRelocation.image}
      />

      <ServiceOverview
        overview={intercityRelocation.overview}
      />

      <IncludedServices
        title="What's Included"
        services={intercityRelocation.includedServices}
      />

      <Pricing
        pricing={intercityRelocation.pricing}
      />

      <QuoteCTA />
    </>
  );
}