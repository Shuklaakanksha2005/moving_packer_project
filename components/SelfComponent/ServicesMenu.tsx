"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  House,
  Building2,
  MapPin,
  Send,
  Bike,
  Car,
  Package,
  Truck,
  ChevronRight,
} from "lucide-react";

export default function ServicesMenu() {
  return (
    <NavigationMenu>

      <NavigationMenuList>

        <NavigationMenuItem>

          <NavigationMenuTrigger
            className="
            bg-transparent
            text-white
             hover:text-yellow-400">
            Services
          </NavigationMenuTrigger>

          <NavigationMenuContent className="overflow-visible relative">

            <div className="w-[280px] p-2 bg-white">

              <div className=" relative flex flex-col">

                <Link
                  href="/services/home-shifting"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition">
                  <House size={18} />
                  <span>Home Shifting</span>
                </Link>

                <Link
                  href="/services/office-relocation"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition">
                  <Building2 size={18} />
                  <span>Office Relocation</span>
                </Link>

                <div className="group relative">

     <Link
        href="/services/local-moving"
        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-amber-50 transition">

       <div className="flex items-center gap-3">
       <MapPin size={18} />
       <span>Local Moving</span>
       </div>

      <ChevronRight size={16} />
     </Link>

      <div
      className=" hidden group-hover:block absolute left-full top-0
      ml-2 w-[350px] bg-red-500  rounded-2xl shadow-xl p-6 border z-50">

      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-5">
      Local Areas — Lucknow
      </h3>

      <div className="space-y-4">

      <Link
        href="/services/local-moving/gomti-nagar"
        className="block hover:text-amber-600">
        Packers and Movers in Gomti Nagar
      </Link>

      <Link
        href="/services/local-moving/indira-nagar"
        className="block hover:text-amber-600">
        Packers and Movers in Indira Nagar
      </Link>

      <Link
        href="/services/local-moving/alambagh"
        className="block hover:text-amber-600">
        Packers and Movers in Alambagh
      </Link>

      <Link
        href="/services/local-moving/jankipuram"
        className="block hover:text-amber-600">
        Packers and Movers in Jankipuram
      </Link>

      <Link
        href="/services/local-moving/hazratganj"
        className="block hover:text-amber-600">
        Packers and Movers in Hazratganj
      </Link>

      <Link
        href="/services/local-moving/vrindavan-yojna"
        className="block hover:text-amber-600">
        Packers and Movers in Vrindavan Yojna
      </Link>

      <Link
        href="/services/local-moving/sultanpur-road"
        className="block hover:text-amber-600">
        Packers and Movers in Sultanpur Road
      </Link>

      <Link
        href="/services/local-moving/faizabad-road"
        className="block hover:text-amber-600">
        Packers and Movers in Faizabad Road
      </Link>

     </div>

   </div>

  </div>


                <Link
                  href="/services/intercity-relocation"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition">
                  <Send size={18} />
                  <span>Intercity Relocation</span>
                </Link>

                <Link
                  href="/services/bike-transport"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition">
                  <Bike size={18} />
                  <span>Bike Transport</span>
                </Link>

                <Link
                  href="/services/car-transport"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition">
                  <Car size={18} />
                  <span>Car Transport</span>
                </Link>

                <Link
                  href="/services/packing-unpacking"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition">
                  <Package size={18} />
                  <span>Packing & Unpacking</span>
                </Link>

                <Link
                  href="/services/loading-unloading"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition">
                  <Truck size={18} />
                  <span>Loading & Unloading</span>
                </Link>

              </div>

            </div>

          </NavigationMenuContent>

        </NavigationMenuItem>

      </NavigationMenuList>

    </NavigationMenu>
  );
}