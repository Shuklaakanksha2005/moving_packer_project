import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import Pricing from "@/components/SelfComponent/Pricing";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { localShifting } from "@/constants/services";

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