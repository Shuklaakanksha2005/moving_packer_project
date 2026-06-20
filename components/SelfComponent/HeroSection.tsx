
import Image from "next/image";
import {  Circle, CircleCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
    return (
    <section className="bg-slate-950 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
       <div className="grid lg:grid-cols-[40%_60%] gap-12 items-center">
        <div>
            <div className="inline-flex items-center gap-2 bg-slate-800 text-yellow-400 px-4 py-2 rounded-full mb-8">
                <Star size={14} fill="currentColor"/>
                <span className= "text-sm">India's Most Trusted Moving Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mt-4 leadindg-tight">
                <span className="block">Move Smarter.</span>
                <span className="block text-yellow-400">Move Faster.   </span>
                <span className="block">Move Stress-Free.</span>
            </h1>

            <p className= "text-slate-300 text-lg mt-6 max-w-xl">
                Professional home shifting, office relocation, vehicle transport, packing, loading, unloading, and intercity moving services with transparent pricing and on-time delivery.
            </p>
            
            <div className="mt-10">
               <Button  size="lg" className= "bg-yellow-400 text-black hover:bg-yellow-500">Get Instant Quote
                <ArrowRightIcon /> 
              </Button>
            </div>
            
            <div className="mt-10 flex flex-col md:flex-row gap-6    text-slate-300">

              <div className= "flex item-center gap-2">
                <CircleCheck size={18} className="text-yellow-400"/>
                <span>98% Satisfaction Rate</span>
              </div>

                <div className="flex item-center gap-2">
                 <CircleCheck size={18} className="text-yellow-400"/>
                 <span>10,000+ Customers Served</span>
                </div>

                <div className="flex item-center gap-2">
                 <CircleCheck size={18} className="text-yellow-400"/>
                 <span>Fully Insured Services</span>
                </div>

            </div>
        </div>


        
            <div className="relative">

                <div className="relative h-[450px] lg:h-[600px] rounded-3xl overflow-hidden">
             
                  <Image src="/Images/HeroSectionImage.jpg" alt="Hero Image" fill className="object-cover"/>

                </div>


                
                <div className="absolute top-1 right-[-35] bg-white text-black p-4 rounded-2xl shadow-lg ">

                   <div className="flex text-yellow-400 mb-2">
                    ★★★★★
                   </div>
                   <h3 className="text-2xl font-bold">4.9</h3>

                   <p className="text-slate-500 text-sm">2,4000+ Reviews</p>

                </div>



                 
                 <div className="absolute bottom-6 left-6 right-6 bg-slate-900 p-5 rounded-2xl flex items-center gap-4">

                    <div className="bg-yellow-400 p-3 rounded-xl">
                        <CircleCheck className="text-black"/>
                    </div>

                  <div>
                    <h3 className ="font-semibold"> Safe & Secure Move</h3>

                    <p className="text-slate-400 text-sm">
                        All belongings fully insured during transits
                    </p>
                  </div>
                 </div>
            </div>
       </div>
      </div>
    </section>  
  )
} 