import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import Pricing from "@/components/SelfComponent/Pricing";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { loadingUnloading } from "@/constants/services";

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