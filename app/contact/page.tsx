import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Moving Packer",

  description:
    "Contact Moving Packer for home shifting, office relocation, bike transport and moving services across India.",

  keywords: [
    "contact moving company",
    "moving support",
    "packers contact",
    "moving inquiry",
  ],
};




export default function ContactPage() {
  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Contact Us
        </h1>

        <p className="text-slate-600 mb-10">
          Have questions? Reach out to our team.
        </p>

        <div className="bg-white rounded-xl p-8 shadow-sm">

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold">
                Phone:
              </h3>
              <p className="text-slate-600">
                +91 9876******
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Email:
              </h3>
              <p className="text-slate-600">
                support@movingpacker.in
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Address:
              </h3>
              <p className="text-slate-600">
                Lucknow, Uttar Pradesh, India
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}