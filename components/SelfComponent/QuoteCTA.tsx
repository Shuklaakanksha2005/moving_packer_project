import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Star } from "lucide-react";
import QuoteDialog from "./QuoteDialog";

export default function QuoteCTA() {
  return (
    <section className="relative">
      {/* Background */}
      <div className="bg-slate-950 h-32"></div>
      <div className="bg-slate-100 h-32"></div>

      {/* Floating Card */}
      <div className="max-w-5xl mx-auto px-6 relative -top-32">
        <div className="bg-white rounded-[32px] shadow-2xl border border-slate-200 p-10 md:p-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div>
              <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-2 rounded-full mb-5">
                Free Moving Estimate
              </span>

              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Get Your Free
                <br />
                Moving Quote
              </h2>

              <p className="text-slate-600 mt-5 text-lg leading-8">
                Planning your next move? Tell us your requirements and receive
                a free personalized quotation in just a few clicks.
              </p>

              <div className="flex flex-wrap gap-5 mt-8 text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  4.9 Google Rating
                </div>

                <div>✔ No Hidden Charges</div>

                <div>✔ Instant Response</div>
              </div>
            </div>

            {/* Right Side */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900">
                Ready to Move?
              </h3>

              <p className="text-slate-600 mt-3 mb-8">
                Get an instant quote from our moving experts.
              </p>

              <div className="space-y-4">
                <QuoteDialog>

                  <Button
                   size="lg" className="w-full rounded-xl bg-yellow-400 text-black hover:bg-white hover:text-black hover:border hover:border-black">
                    Get Your Free Quote Today
                   </Button>

                </QuoteDialog>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-xl bg-yellow-400 text-black"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t">
                <div className="flex justify-between text-center">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">5000+</p>
                    <p className="text-sm text-slate-500">Moves</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-slate-900">24/7</p>
                    <p className="text-sm text-slate-500">Support</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-slate-900">100%</p>
                    <p className="text-sm text-slate-500">Safe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}