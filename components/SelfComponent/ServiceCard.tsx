import {ReactNode} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {ArrowRight } from "lucide-react";

type ServiceCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    
};

export default function ServiceCard({icon, title, description} : ServiceCardProps)  { 
    return(
     <Card  className="border-0 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer ">
    <CardContent className="p-6">
         
      <div  className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-4">{icon}</div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>

      <p className="text-slate-500 leading-7 mb-5">{description}</p>

      <button  className="flex items-center gap-2 text-amber-600 font-semibold">Learn More 
       <ArrowRight  size={16} />
      </button>
      </CardContent>
      </Card>
    );
}