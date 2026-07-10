import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import Pricing from "@/components/SelfComponent/Pricing";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { packingUnpacking } from "@/constants/services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packing & Unpacking Services | Moving Packer",

  description:
    "Professional packing and unpacking services using premium packing materials for safe relocation.",

  keywords: [
    "packing services",
    "unpacking services",
    "professional packing",
    "packing movers",
    "fragile item packing",
    "house packing",
  ],
};


export default function PackingUnpackingPage() {
  return (
    <>
      <ServiceHero
        title={packingUnpacking.title}
        description={packingUnpacking.description}
        image={packingUnpacking.image}
      />

      <ServiceOverview
        overview={packingUnpacking.overview}
      />

      <IncludedServices
        title="What's Included"
        services={packingUnpacking.includedServices}
      />

      <Pricing
        pricing={packingUnpacking.pricing}
      />

      <QuoteCTA />
    </>
  );
}