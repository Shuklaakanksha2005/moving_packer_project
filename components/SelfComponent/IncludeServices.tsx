import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

type IncludedServicesProps = {
  title: string;
  services: string[];
};

export default function IncludedServices({
  title,
  services,

}: IncludedServicesProps) {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What's Included
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need for a safe, smooth and hassle-free moving experience.
          </p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => (

            <Card
              key={service}
              className="border-0 shadow-sm hover:shadow-lg transition-all"
            >

              <CardContent className="flex items-center gap-4 p-6">

                <div className="bg-yellow-100 p-3 rounded-full">

                  <CheckCircle2
                    size={22}
                    className="text-yellow-600"
                  />

                </div>

                <h3 className="font-semibold text-slate-800">
                  {service}
                </h3>

              </CardContent>

            </Card>

          ))}

        </div>

      </div>

    </section>
  );
}