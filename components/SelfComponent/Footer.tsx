
import {
  Package,
  MapPin,
  Phone,
  Mail,
  
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Footer */}
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-400 p-3 rounded-xl">
                <Package className="text-slate-900" size={24} />
              </div>

              <h2 className="text-3xl font-bold text-white">
                Moving
                <span className="text-yellow-400">Packer</span>
              </h2>
            </div>

            <p className="max-w-md leading-8 text-lg">
              India's trusted relocation partner for home shifting,
              office moves, and vehicle transport.
              Safe, transparent, and on-time.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <MapPin
                  className="text-yellow-400 shrink-0"
                  size={20}
                />

                <span>
                  12, Logistic Hub, Andheri East,
                  Mumbai – 400069
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone
                  className="text-yellow-400 shrink-0"
                  size={20}
                />

                <span>+91 98765*****</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail
                  className="text-yellow-400 shrink-0"
                  size={20}
                />

                <span>support@movingpacker.in</span>
              </div>
            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-10">

              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition cursor-pointer">
                <FaFacebookF size={20} />
              </div>

              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition cursor-pointer">
                <FaXTwitter size={20} />
              </div>

              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition cursor-pointer">
                <FaInstagram size={20} />
              </div>

              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition cursor-pointer">
                <FaLinkedinIn size={20} />
              </div>

            </div>

          </div>

          {/* Company */}
          <div >
            <h3 className="text-white text-xl font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-3">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Press & Media</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-3">
              <li>Home Shifting</li>
              <li>Office Relocation</li>
              <li>Bike Transport</li>
              <li>Car Transport</li>
              <li>Packing & Unpacking</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Resources
            </h3>

            <ul className="space-y-3">
              <li>Moving Checklist</li>
              <li>Packing Tips</li>
              <li>City Guides</li>
              <li><Link href="/faq"> FAQ</Link>
              </li>
              <li>Pricing Guide</li>
            </ul>
          </div>

           {/* Support Column */}

       
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Support
            </h3>

            <ul className="space-y-3">
              <li>Help Center</li>
              <li>Track Shipment</li>
              <li>File a Claim</li>
              <li>Partner With Us</li>
              <li>Sitemap</li>
            </ul>
          </div>

        </div>

      

        {/* Divider */}

        <div className="border-t border-slate-800 my-12"></div>

        {/* Bottom Footer */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p>
            © 2024 MovingPacker. All rights reserved.
          </p>

          <div className="flex gap-8">
           <Link href="/privacy-policy">
             <span>Privacy Policy</span>
            </Link>
           <Link href="/terms-and-conditions">
             <span>Terms of Service</span>
           </Link>
           <Link href="/refund-and-cancellation">
           <span>Refund & Cancellation Policy</span>
          </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}