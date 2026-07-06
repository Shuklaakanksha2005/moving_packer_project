import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import Pricing from "@/components/SelfComponent/Pricing";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { intercityRelocation } from "@/constants/services";

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