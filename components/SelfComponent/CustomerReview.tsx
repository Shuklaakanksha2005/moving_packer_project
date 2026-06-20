
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ReviewCard from "./ReviewCard";

export default function CustomerReviews() {

  const reviews = [
    {
      review:
        "Absolutely fantastic experience! The team arrived on time and packed everything carefully. Not a single item was damaged during the move.",
      name: "Priya Sharma",
      route: "Mumbai → Bangalore",
      service: "Home Shifting",
      image: "/Images/user1.jpg",
    },

    {
      review:
        "Used them for our office relocation. The entire move was completed over the weekend, and work resumed on Monday without any issues.",
      name: "Rahul Mehta",
      route: "Delhi → Pune",
      service: "Office Relocation",
      image: "/Images/user2.jpg",
    },

    {
      review:
        "My bike was transported from Chennai to Hyderabad safely and delivered on schedule. The tracking updates were very helpful.",
      name: "Ananya Iyer",
      route: "Chennai → Hyderabad",
      service: "Bike Transport",
      image: "/Images/user3.jpg",
    },

    {
      review:
        "Packing quality was impressive. Even my glass items and electronics arrived safely. Pricing was transparent with no surprises.",
      name: "Vikram Singh",
      route: "Kolkata → Mumbai",
      service: "Packing & Moving",
      image: "/Images/user4.jpg",
    },

    {
      review:
        "I shifted my family from Lucknow to Noida. The movers were polite, quick, and handled all furniture with care.",
      name: "Amit Verma",
      route: "Lucknow → Noida",
      service: "Home Shifting",
      image: "/Images/user5.jpg",
    },

    {
      review:
        "Needed my car transported to another city. Delivery was completed within the promised time and the vehicle arrived in perfect condition.",
      name: "Sneha Kapoor",
      route: "Jaipur → Gurgaon",
      service: "Car Transport",
      image: "/Images/user6.jpg",
    },

    {
      review:
        "The team helped us relocate our startup office. Their planning and coordination saved us a lot of time.",
      name: "Karan Malhotra",
      route: "Delhi → Noida",
      service: "Office Relocation",
      image: "/Images/user7.jpg",
    },

    {
      review:
        "Customer support stayed in touch throughout the move. Whenever I had questions, they responded quickly and clearly.",
      name: "Neha Gupta",
      route: "Indore → Bhopal",
      service: "Intercity Relocation",
      image: "/Images/user8.jpg",
    },
  ];

  return (
    <section className="bg-slate-100 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-50 px-4 py-1 mb-6">
            Customer Reviews
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our Customers Say
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Real stories from real people who trusted us with their most important move.
          </p>

        </div>

        {/* Carousel */}

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >

          <CarouselContent>

            {reviews.map((review) => (

              <CarouselItem
                key={review.name}
                className="
                  basis-full
                  md:basis-1/2
                  lg:basis-1/3
                  xl:basis-1/4
                "
              >
                <ReviewCard
                  review={review.review}
                  name={review.name}
                  route={review.route}
                  service={review.service}
                  image={review.image}
                />
              </CarouselItem>

            ))}

          </CarouselContent>

          <CarouselPrevious className="bg-slate-950 text-white border-0" />
          <CarouselNext className="bg-slate-950 text-white border-0" />

        </Carousel>

      </div>

    </section>
  );
}