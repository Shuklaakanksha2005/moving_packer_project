import {Card, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem,SelectTrigger, SelectValue} from "@/components/ui/select";
import { ArrowRightIcon, MapPin, Calendar } from "lucide-react";

export default function QuoteForm(){
     return(
       <section className="relative">
          
         <div className="bg-slate-950 h-32"></div>
           <div className="bg-slate-100 "></div>
              <div className="max-w-6xl mx-auto px-6 relative -top-16">
                
                <Card className="-t-40 rounded-3xl shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-8">
                        Get Your Free Moving Quotes
                    </h2>

                    <div className="grid lg:grid-cols-4 gap-6">

                    <div>
                        <label className="">
                            Pickup Location
                        </label>
                    
                    <div className="relative">
                        <MapPin size={18} className="absolute left-3 top-2 text-slate-400"/>
                        <Input placeholder="Enter pickup location" className="pl-10"/>  
                    </div>
                  </div>

                   <div>
                     <label>Drop Location</label>
                  

                   <div className="relative p-0.5">
                     <MapPin size={18} className="absolute left-3 top-2 text-slate-400" />
                     <Input placeholder="Enter drop location" className="pl-10"/>
                   </div>
                  </div>


                  <div>
                <label className="block mb-1 font-medium text-slate-600">
                  Move Date
                </label>

                <div className="relative">
                  <Calendar
                    size={18}
                    className="absolute left-3 top-2 text-slate-400"
                  />

                  <Input
                    type="date"
                    className="pl-10"
                  />
                </div>
              </div>
  

               <div>
                 <label className="block mb-2 font-medium text-slate-600">Service Type</label>
            
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Service"/>
                  </SelectTrigger>

                <SelectContent>

                 <SelectItem value="home">Home Shifting</SelectItem>
                 <SelectItem value="office">Office Relocation</SelectItem>
                 <SelectItem value="bike">Bike Transport</SelectItem>
                <SelectItem value="car">Car Transport</SelectItem>
                  <SelectItem value="bike">Packing & Unpacking</SelectItem>
                  <SelectItem value="bike">Local Shifting</SelectItem>

                </SelectContent>


                </Select>
             
               </div>
             </div>
           



                <div className="mt-8">

                    <Button size="lg" className="bg-slate-950 hover:bg-slate-900 rounded-xl">
                        Check Pricing
                        <ArrowRightIcon />
                    </Button>
                </div>

                  </CardContent>
                </Card>
          </div>
       </section>
     );
}