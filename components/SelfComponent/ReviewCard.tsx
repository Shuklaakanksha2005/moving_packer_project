
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ReviewCardProps = {
  review: string;
  name: string;
  route: string;
  service: string;
  image: string;
};

export default function ReviewCard({
  review,
  name,
  route,
  service,
  image,
}: ReviewCardProps) {
  return (
    <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300">

      <CardContent className="p-6 flex flex-col h-full">

        {/* Quote Icon */}
        <div className="text-yellow-400 text-5xl mb-4">
          ❝
        </div>

        {/* Review Text */}
        <p className="text-slate-600 leading-7 mb-6 min-h-[140px]">
          {review}
        </p>

        {/* Stars */}
        <div className="text-yellow-400 text-lg mb-6">
          ★★★★★
        </div>

        {/* Customer Information */}

      <div className="flex item-center gap-3 mb-6 min-h-[56px]">  
        <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </div>
          <div>
            <h4 className="font-semibold text-slate-900">
              {name}
            </h4>

            <p className="text-sm text-slate-500">
              {route}
            </p>
          </div>

        </div>

        {/* Service Badge */}
        <div className="mt-auto">

          <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-50">
            {service}
          </Badge>

        </div>

      </CardContent>

    </Card>
  );
}