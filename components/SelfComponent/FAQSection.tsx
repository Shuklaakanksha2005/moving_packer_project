
import { Badge } from "@/components/ui/badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="bg-slate-100 py-24">

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <Badge
            className="
              bg-amber-50
              text-amber-700
              hover:bg-amber-50
              px-4
              py-1
              mb-6
            "
          >
            FAQ
          </Badge>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-slate-900
              mb-6
            "
          >
            Frequently Asked Questions
          </h2>

          <p className="text-slate-500 text-lg">
            Everything you need to know before your move.
          </p>

        </div>

        {/* FAQ Items */}

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >

          {/* Question 1 */}

          <AccordionItem
            value="item-1"
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              px-6
            "
          >
            <AccordionTrigger
              className="
                text-left
                text-lg
                font-semibold
                text-slate-900
                hover:no-underline
              "
            >
              How is pricing calculated?
            </AccordionTrigger>

            <AccordionContent
              className="
                text-slate-600
                leading-7
              "
            >
              Pricing depends on distance, volume of items,
              type of service selected, and any additional
              requirements such as packing or storage.
            </AccordionContent>
          </AccordionItem>

          {/* Question 2 */}

          <AccordionItem
            value="item-2"
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              px-6
            "
          >
            <AccordionTrigger
              className="
                text-left
                text-lg
                font-semibold
                text-slate-900
                hover:no-underline
              "
            >
              Do you provide insurance for my belongings?
            </AccordionTrigger>

            <AccordionContent
              className="
                text-slate-600
                leading-7
              "
            >
              Yes. We offer transit insurance options to
              protect your belongings throughout the moving
              process.
            </AccordionContent>
          </AccordionItem>

          {/* Question 3 */}

          <AccordionItem
            value="item-3"
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              px-6
            "
          >
            <AccordionTrigger
              className="
                text-left
                text-lg
                font-semibold
                text-slate-900
                hover:no-underline
              "
            >
              Can I track my shipment in real time?
            </AccordionTrigger>

            <AccordionContent
              className="
                text-slate-600
                leading-7
              "
            >
              Yes. You can monitor your shipment in real time
              through our tracking system from pickup to delivery.
            </AccordionContent>
          </AccordionItem>

          {/* Question 4 */}

          <AccordionItem
            value="item-4"
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              px-6
            "
          >
            <AccordionTrigger
              className="
                text-left
                text-lg
                font-semibold
                text-slate-900
                hover:no-underline
              "
            >
              What items cannot be transported?
            </AccordionTrigger>

            <AccordionContent
              className="
                text-slate-600
                leading-7
              "
            >
              Hazardous materials, flammable liquids,
              explosives, illegal substances, and other
              restricted items cannot be transported.
            </AccordionContent>
          </AccordionItem>

          {/* Question 5 */}

          <AccordionItem
            value="item-5"
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              px-6
            "
          >
            <AccordionTrigger
              className="
                text-left
                text-lg
                font-semibold
                text-slate-900
                hover:no-underline
              "
            >
              Do you offer same-day moving services?
            </AccordionTrigger>

            <AccordionContent
              className="
                text-slate-600
                leading-7
              "
            >
              Yes. Same-day moving services are available
              in selected cities depending on availability
              and distance.
            </AccordionContent>
          </AccordionItem>

        </Accordion>

      </div>

    </section>
  );
}