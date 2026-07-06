import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import Pricing from "@/components/SelfComponent/Pricing";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { packingUnpacking } from "@/constants/services";

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