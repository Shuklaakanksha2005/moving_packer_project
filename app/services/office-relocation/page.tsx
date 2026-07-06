
import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import PricingCards from "@/components/SelfComponent/PricingCard";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { officeRelocation } from "@/constants/services";

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