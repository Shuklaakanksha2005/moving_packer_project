import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Moving Packer",
  description:
    "Read the terms and conditions for using Moving Packer's relocation and transportation services.",
};

export default function TermsConditionsPage() {
  return (
    <main className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-slate-900 mb-10">
          Terms & Conditions
        </h1>

        <div className="bg-white rounded-3xl shadow-sm p-10 space-y-8">

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Booking
            </h2>

            <p className="text-slate-600 leading-8">
              All bookings are subject to confirmation based on service availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Customer Responsibilities
            </h2>

            <p className="text-slate-600 leading-8">
              Customers should provide accurate pickup and delivery details and ensure all belongings are ready before the scheduled move.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Pricing
            </h2>

            <p className="text-slate-600 leading-8">
              Final pricing may vary depending on distance, volume of goods, additional services, and site conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Delays
            </h2>

            <p className="text-slate-600 leading-8">
              While we strive for timely delivery, delays caused by weather, traffic, road closures, or other unforeseen circumstances are beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Liability
            </h2>

            <p className="text-slate-600 leading-8">
              We take every precaution to protect your belongings. Any claims must be reported within 24 hours of delivery.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}