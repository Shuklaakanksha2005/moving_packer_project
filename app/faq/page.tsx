import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Moving Packer",
  description:
    "Find answers to common questions about home shifting, office relocation, bike transport, car transport, pricing and booking.",
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a moving service?",
    answer:
      "Simply click the 'Get Free Quote' button, fill in your moving details, and our team will contact you with a personalized quotation.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes. We provide high-quality packing materials including cartons, bubble wrap, stretch film and protective covers for furniture and fragile items.",
  },
  {
    question: "Are my belongings insured during transportation?",
    answer:
      "Yes. We offer transit insurance options to provide additional protection for your belongings during the move.",
  },
  {
    question: "How is the moving cost calculated?",
    answer:
      "The cost depends on factors such as distance, quantity of goods, floor level, type of service and any additional requirements.",
  },
  {
    question: "Do you provide intercity relocation services?",
    answer:
      "Yes. We offer reliable intercity relocation services across India with secure transportation and timely delivery.",
  },
  {
    question: "Can I transport my bike or car?",
    answer:
      "Absolutely. We provide dedicated bike and car transportation services with secure handling and doorstep delivery.",
  },
  {
    question: "How early should I book my move?",
    answer:
      "We recommend booking at least 3–7 days in advance to ensure availability and smooth planning.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, bank transfer and other commonly used digital payment methods.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-slate-50 py-20">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-lg text-slate-600">
            Find answers to the most commonly asked questions about our moving
            and relocation services.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-sm p-8">

          <Accordion type="single" collapsible>

            {faqs.map((faq, index) => (

              <AccordionItem
                key={index}
                value={`item-${index}`}
              >

                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent>
                  {faq.answer}
                </AccordionContent>

              </AccordionItem>

            ))}

          </Accordion>

        </div>

      </div>

    </main>
  );
}