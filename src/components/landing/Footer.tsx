import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 m-8">
          {/* Company Info */}
          <div>
            <Link
              href="/"
              className="flex flex-col items-start justify-center "
            >
              <div className="flex items-center justify-center ">
                <Image
                  src="/enlogo.png"
                  alt="Encore Billing Group Logo"
                  width={46}
                  height={46}
                  className="object-contain bg-transparent rounded-md"
                />
                <div className="ml-2  text-left">
                  <h1 className="text-white/90 font-bold text-xl sm:text-lg tracking-widest ">
                    ENCORE
                  </h1>
                  <h2 className="text-white/90 text-xs/7  tracking-tighter mt-[-2]">
                    BILLING GROUP
                  </h2>
                </div>
              </div>

              <p className="text-accent-green text-[10px] sm:text-xs font-medium mt-1 tracking-wider uppercase mb-2">
                Excellence in Billing
              </p>
            </Link>

            <div className="space-y-2 text-sm text-white/80 mb-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(512) 704-7074</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>Support@encorebillinggroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>718 Kingston Pl, Cedar Park, TX 78613</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-accent-green text-white transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-accent-green text-white transition-colors"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-accent-green text-white transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-accent-green text-white transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent-green transition-colors"
                >
                  Revenue Cycle Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent-green transition-colors"
                >
                  Medical Billing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent-green transition-colors"
                >
                  A/R Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent-green transition-colors"
                >
                  Practice Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent-green transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/specialities"
                  className="hover:text-accent-green transition-colors"
                >
                  Specialities
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent-green transition-colors"
                >
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-accent-green transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-accent-green transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              

            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 text-center text-white/70 text-sm">
          <p>
            &copy; 2025 Encore Billing Group. All rights reserved. | HIPAA
            Compliance | ISO Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
