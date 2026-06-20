
import { Badge } from "@/components/ui/badge";
import {
  House,
  Building2,
  MapPin,
  Send,
  Bike,
  Car,
  Package,
  Truck,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
    const Services =[
        {
        icon:<House size={28} />,
        title : "Home Shifting",
        description: "Complete household relocation with careful packing and timely delivery.",
        },

        {
            icon: <Building2 size={28} />,
            title: "Office Relocation",
            description: "Seamless office moves with zero downtime and secure equipment handling.",

        },

        {
            icon: <MapPin size={28} />,
            title: "Local Moving",
            description: "Affordable, quick, and hassle-free same-city moves for everyone.",
        },

        {
            icon: <Send size={28} />,
            title:"InterCity Relocation",
            description:  "Long-distance moves across cities with real-time tracking and full insurance.",
        },

        {
            icon:<Bike size={28} />,
            title: "Bike Transport",
            description: "Two-wheeler transportation with damage-proof containers and insurance.",

        },

        {
            icon:<Car size={28} />,
            title: "Car Transport",
            description:  "Door-to-door car carrier service with top-tier safety standards.",
        },

        {
            icon: <Package size={28} />,
            title: "Packing & Unpacking",
            description: "Professional packing with high-quality materials and careful unpacking.",
        },

        {
           icon: <Truck size={28} />,
          title: "Loading & Unloading",
          description: "Expert labor for safe, efficient loading and unloading at any location.",  
        }

    ];
    return(
        <section className="bg-slate-100 py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div  className="text-center mb-16">

              <Badge className=" bg-amber-50 text-amber-600 hover:bg-amber-50 px-4 py-1 mb-6 ">Our Services</Badge>

                <h2 className="  text-4xl md:text-6xl font-bold text-slate-900 mb-6 "> Everything You Need for a Perfect Move</h2>

                <p className=" max-w-3xl mx-auto text-lg  text-slate-500 "> From packing your first box to setting up your new
               space, we handle every step with care and
              professionalism.</p>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8"> 
            { Services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
            ))}
            </div>
          </div>
        </section> 
    )
}