import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import FeatureItem from "./FeatureItem";

import {
  Users,
  Shield,
  DollarSign,
  ShieldCheck,
  Radio,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-100 py-24">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= */}
          {/* LEFT IMAGE */}
          {/* ================= */}
          <div className="relative">

            {/* Main Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden">

              <Image
                src="/Images/why_choose_us_img.jpg"
                alt="Why Choose Us"
                fill
                className="object-cover"
              />

            </div>

            {/* Floating Stats Card */}
            <Card className="absolute bottom-[-30px] right-[-20px] bg-slate-950 border-0 text-white rounded-3xl">

              <CardContent className="p-3">

                <h3 className="text-5xl font-bold text-yellow-400">
                  98%
                </h3>

                <h4 className="text-xl font-semibold mt-2">
                  Satisfaction Rate
                </h4>

                <p className="text-slate-400 mt-2">
                  Based on 10,000+ completed moves
                </p>

              </CardContent>

            </Card>

          </div>

          {/* ================= */}
          {/* RIGHT CONTENT */}
          {/* ================= */}
          <div>

            {/* Badge */}
            <Badge
              className="
              bg-amber-50
              text-amber-600
              hover:bg-amber-50
              px-4
              py-1
              mb-6
              "
            >
              Why Choose Us
            </Badge>

            {/* Heading */}
            <h2
              className="
              text-4xl
              md:text-6xl
              font-bold
              text-slate-900
              mb-6
              "
            >
              Built on Trust,
              Delivered with Care
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-lg mb-12">
              We know moving is stressful.
              That's why we've built every part
              of our service to give you peace of
              mind from start to finish.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">

              <FeatureItem
                icon={<Users size={22} />}
                title="Verified Professionals"
                description="Every mover is background-checked, trained, and certified."
              />

              <FeatureItem
                icon={<Shield size={22} />}
                title="Safe Packing Standards"
                description="Premium materials and proven techniques protect every item."
              />

              <FeatureItem
                icon={<ShieldCheck size={22} />}
                title="Damage Protection"
                description="Transit insurance keeps your belongings protected."
              />

              <FeatureItem
                icon={<Radio size={22} />}
                title="Live Shipment Tracking"
                description="Track your move from pickup to final delivery."
              />

              <FeatureItem
                icon={<DollarSign size={22} />}
                title="Transparent Pricing"
                description="No hidden charges. Clear itemized quotes."
              />

              <FeatureItem
                icon={<Headphones size={22} />}
                title="Dedicated Support"
                description="24/7 support whenever you need assistance."
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}