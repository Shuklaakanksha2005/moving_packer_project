import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import QuoteDialog from "./QuoteDialog";

type ServiceHeroProps = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceHero({
  title,
  description,
  image,
}: ServiceHeroProps) {
  return (
    <section className="bg-slate-950 text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}

        <div className="flex items-center gap-2 text-sm text-slate-300 mb-10">

          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>

          <span>/</span>

          <span className="text-yellow-400">
            {title}
          </span>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              {title}
            </h1>

            <p className="text-lg text-slate-300 leading-8 mb-10">
              {description}
            </p>

            <div className="flex gap-5 flex-wrap">

              <QuoteDialog>

                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold">
                  Get Free Quote
                </button>

              </QuoteDialog>

              <a
             href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
             className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-xl transition flex items-center justify-center gap-2">
             <MessageCircle size={20} />
              WhatsApp Now
              </a>
              
            </div>

          </div>

          {/* Right Side */}

         <div className="flex justify-center">

        <Image
            src={image}
             alt={title}
             width={450}
             height={450}
             className="rounded-3xl object-cover h-[450px] w-[450px] shadow-xl"
         />

         </div>

        </div>

      </div>

    </section>
  );
}