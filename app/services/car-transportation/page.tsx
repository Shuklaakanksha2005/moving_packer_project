

import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";

import PricingCards from "@/components/SelfComponent/PricingCard";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { carTransport } from "@/constants/services";

export default function CarTransportPage() {
  return (
    <>
      

      <ServiceHero
        title={carTransport.title}
        description={carTransport.description}
        image={carTransport.image}
      />

      <ServiceOverview
        overview={carTransport.overview}
      />

      <IncludedServices
        title="What's Included"
        services={carTransport.includedServices}
        />

      <PricingCards
        pricing={carTransport.pricing}
      />

      <QuoteCTA />

    
    </>
  );
}