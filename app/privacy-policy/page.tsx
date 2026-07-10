import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Moving Packer",
  description:
    "Read our privacy policy to understand how Moving Packer collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-slate-900 mb-10">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-3xl shadow-sm p-10 space-y-8">

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Information We Collect
            </h2>

            <p className="text-slate-600 leading-8">
              When you request a moving quote, we may collect your name, phone number,
              email address, pickup location, drop location and preferred moving date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How We Use Your Information
            </h2>

            <p className="text-slate-600 leading-8">
              We use your information only to provide quotations, schedule moving
              services, respond to your inquiries and improve our customer experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Protection
            </h2>

            <p className="text-slate-600 leading-8">
              We implement reasonable security measures to protect your personal
              information from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Third-Party Services
            </h2>

            <p className="text-slate-600 leading-8">
              We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Contact
            </h2>

            <p className="text-slate-600 leading-8">
              If you have any questions regarding this Privacy Policy, please
              contact us through our Contact page.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}