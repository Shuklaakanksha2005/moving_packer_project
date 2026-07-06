import { Card, CardContent } from "@/components/ui/card";

type PricingProps = {
  pricing: {
    type: string;
    price: string;
  }[];
};

export default function PricingCards({
  pricing,
}: PricingProps) {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-slate-900">
            Estimated Pricing
          </h2>

          <p className="text-slate-600 mt-3">
            Prices may vary depending on distance and shifting requirements.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {pricing.map((item) => (

            <Card
              key={item.type}
              className="rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <CardContent className="p-8 text-center">

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.type}
                </h3>

                <p className="text-4xl font-bold text-yellow-500 my-6">
                  {item.price}
                </p>

                <p className="text-slate-500">
                  Starting Price
                </p>

              </CardContent>

            </Card>

          ))}

        </div>

      </div>

    </section>
  );
}