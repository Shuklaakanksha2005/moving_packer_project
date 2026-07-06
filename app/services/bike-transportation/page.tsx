

import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import PricingCards from "@/components/SelfComponent/PricingCard";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { bikeTransport } from "@/constants/services";

export default function BikeTransportPage() {
  return (
    <>
    

      <ServiceHero
        title={bikeTransport.title}
        description={bikeTransport.description}
        image={bikeTransport.image}
      />

      <ServiceOverview
        overview={bikeTransport.overview}
      />

      <IncludedServices
        title="What's Included"
        services={bikeTransport.includedServices}
      />

      <PricingCards
        pricing={bikeTransport.pricing}
      />

      <QuoteCTA />

      
    </>
  );
}