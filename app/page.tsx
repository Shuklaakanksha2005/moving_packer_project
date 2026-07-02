

import HeroSection from "../components/SelfComponent/HeroSection";
import QuoteCTA from "../components/SelfComponent/QuoteCTA";
import ServiceSection from "@/components/SelfComponent/ServiceSection";
import WhyChooseUs from "@/components/SelfComponent/WhyChooseUs";
import StatsSection from "@/components/SelfComponent/StatsSection";
import CustomerReviews  from "@/components/SelfComponent/CustomerReview";
import FAQSection from "@/components/SelfComponent/FAQSection";
import CTASection from "@/components/SelfComponent/CTASection";


export default function Home(){
  return(
    <>
    
    <HeroSection />
    <QuoteCTA />
    <ServiceSection />
    <WhyChooseUs />
    <StatsSection />
    <CustomerReviews />
    <FAQSection />
    <CTASection />
    



    </>
  )
}