import Header from "../components/SelfComponent/Header";
import HeroSection from "../components/SelfComponent/HeroSection";
import QuoteForm from "../components/SelfComponent/QuoteForm";
import ServiceSection from "@/components/SelfComponent/ServiceSection";
import WhyChooseUs from "@/components/SelfComponent/WhyChooseUs";
import StatsSection from "@/components/SelfComponent/StatsSection";
import CustomerReviews  from "@/components/SelfComponent/CustomerReview";
import FAQSection from "@/components/SelfComponent/FAQSection";
import CTASection from "@/components/SelfComponent/CTASection";
import Footer from "@/components/SelfComponent/Footer";

export default function Home(){
  return(
    <>
    <Header />
    <HeroSection />
    <QuoteForm />
    <ServiceSection />
    <WhyChooseUs />
    <StatsSection />
    <CustomerReviews />
    <FAQSection />
    <CTASection />
    <Footer />



    </>
  )
}