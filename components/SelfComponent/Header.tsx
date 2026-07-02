"use client";

import { useState } from "react";
import Link from "next/link";
import ServicesMenu from "@/components/SelfComponent/ServicesMenu";
import QuoteModal from "@/components/SelfComponent/QuoteForm";
import QuoteDialog from "@/components/SelfComponent/QuoteDialog";
import {
  Menu,
  X,
  Package,
  Clock,
  Shield,
  MapPin,
  BadgeCheck,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      
      <div className="bg-slate-950 text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-center gap-8 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-yellow-400" />
              <span>24/7 Customer Support</span>
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck size={16} className="text-yellow-400" />
              <span>Fully Verified Movers</span>
            </div>

            <div className="flex items-center gap-2">
              <Shield size={16} className="text-yellow-400" />
              <span>Insured Transportation</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" />
              <span>Real-Time Tracking</span>
            </div>
          </div>
        </div>
      </div>

      
      <nav className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-yellow-400 p-3 rounded-lg">
                <Package size={24} className="text-black" />
              </div>

              <h1 className="text-2xl font-bold">
                Moving
                <span className="text-yellow-400">Packer</span>
              </h1>
            </Link>

            
            <ul className="hidden lg:flex items-center gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                  <ServicesMenu />
              </li>

              <li>
                <Link href="/howItWorks">How It Works</Link>
              </li>

              <li>
                <Link href="/">Blog</Link>
              </li>

              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>

        
            <QuoteDialog>

             <button className="hidden lg:block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
             Get Free Quote
             </button>

            </QuoteDialog>

            
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        
        {isOpen && (
          <div className="lg:hidden bg-slate-900">
            <div className="px-6 py-5 flex flex-col gap-4">
              <Link href="/">Home</Link>

              <Link href="/services">Services</Link>

              <Link href="/">How It Works</Link>

              <Link href="/">Blog</Link>

              <Link href="./app/about/page.tsx">About Us</Link>

              <Link href="./app/contact/page.tsx">Contact</Link>

             <QuoteDialog>

                <button className="hidden lg:block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
                  Get Free Quote
                  </button>

              </QuoteDialog>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}