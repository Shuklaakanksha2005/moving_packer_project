
import { Button } from "@/components/ui/button";

import QuoteDialog from "./QuoteDialog";

export default function CTASection() {
  return (
    <section className="py-28 bg-[radial-gradient(circle_at_center,_#2d2d2d_0%,_#020617_60%)]">

      {/* Container */}
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">

          Ready for a{" "}

          <span className="text-yellow-400">
            Hassle-Free
          </span>

          <br />

          Move?

        </h2>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-8">

          Get a personalized quote and move with confidence.
          Thousands of families have trusted us — yours could be next.

        </p>

        <QuoteDialog>

          <Button size="lg" className=" rounded-xl bg-yellow-400 text-black hover:bg-amber-100 hover:text-black hover:border hover:border-black mt-10">
              Get Your Free Quote Today
           </Button>

        </QuoteDialog>

      </div>

    </section>
  );
}