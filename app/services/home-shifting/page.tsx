

import ServiceHero from "@/components/SelfComponent/ServiceHero";
import ServiceOverview from "@/components/SelfComponent/serviceOverview";
import IncludedServices from "@/components/SelfComponent/IncludeServices";
import Pricing from "@/components/SelfComponent/Pricing";
import QuoteCTA from "@/components/SelfComponent/QuoteCTA";

import { homeShifting } from "@/constants/services";


export default function HomeShiftingPage() {
  return (
    <>
      

      <ServiceHero
        title={homeShifting.title}
        description={homeShifting.description}
        image={homeShifting.image}
      />
      <ServiceOverview overview={homeShifting.overview} />

     <IncludedServices
       title="What's Included"
       services={homeShifting.includedServices}
        />

      <Pricing pricing={homeShifting.pricing} />
      
      <QuoteCTA />



    </>
  );
}