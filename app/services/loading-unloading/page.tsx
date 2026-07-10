import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import Pricing from "@/components/SelfComponent/Pricing";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { loadingUnloading } from "@/constants/services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading & Unloading Services | Moving Packer",

  description:
    "Professional loading and unloading services with trained staff and safe handling of goods across India.",

  keywords: [
    "loading service",
    "unloading service",
    "loading unloading",
    "goods handling",
    "moving labor",
    "furniture loading",
  ],
};



export default function LoadingUnloadingPage() {
  return (
    <>
      <ServiceHero
        title={loadingUnloading.title}
        description={loadingUnloading.description}
        image={loadingUnloading.image}
      />

      <ServiceOverview
        overview={loadingUnloading.overview}
      />

      <IncludedServices
        title="What's Included"
        services={loadingUnloading.includedServices}
      />

      <Pricing
        pricing={loadingUnloading.pricing}
      />

      <QuoteCTA />
    </>
  );
}