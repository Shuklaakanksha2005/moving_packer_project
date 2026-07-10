
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Moving Packer",

  description:
    "Learn about Moving Packer, our mission, values and commitment to providing safe and reliable relocation services across India.",

  keywords: [
    "about moving packer",
    "moving company",
    "professional movers",
    "trusted packers",
  ],
};


export default function AboutPage() {
  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          About <span className="text-yellow-400">Moving</span><span className="text-yellow-400">Packer</span>
        </h1>

        <p className="text-lg text-slate-600 leading-8 mb-10">
          MovingPacker is India's trusted relocation partner helping
          individuals, families, and businesses move safely and
          efficiently across cities and states.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-7">
              To make every move simple, affordable, and stress-free
              through reliable transportation, professional packing,
              and transparent pricing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Us
            </h2>

            <ul className="space-y-3 text-slate-600">
              <li>✓ Verified Moving Partners</li>
              <li>✓ Real-Time Tracking</li>
              <li>✓ Transparent Pricing</li>
              <li>✓ Safe Packing & Handling</li>
              <li>✓ 24/7 Customer Support</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}