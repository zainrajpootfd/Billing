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
    <footer className="bg-[#004b87] text-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 pb-6  "
            >
              <div className="bg-[#004b87] rounded-md p-[2px] overflow-hidden w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/enlogo.png"
                  alt="Encore Billing Group Logo"
                  width={44}
                  height={44}
                  className="object-contain rounded-md"
                />
              </div>

              <div className="  leading-tight">
                <h1 className="text-md xl:text-xl font-bold text-green-500">
                  Encore Billing Group
                </h1>
                <p className="text-xs text-gray-200">
                  your growth, our promise
                </p>
              </div>
            </Link>

            <div className="space-y-2 text-sm text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>1-800-ENCORE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@encorebillinggroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Healthcare Ave, Medical City, ST 12345</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-2 rounded-full bg-gray-700 hover:bg-green-500 text-white transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-2 rounded-full bg-gray-700 hover:bg-green-500 text-white transition-colors"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2 rounded-full bg-gray-700 hover:bg-green-500 text-white transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 rounded-full bg-gray-700 hover:bg-green-500 text-white transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/services"
                  className="hover:text-green-500 transition-colors"
                >
                  Revenue Cycle Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-green-500 transition-colors"
                >
                  Medical Billing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-green-500 transition-colors"
                >
                  A/R Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-green-500 transition-colors"
                >
                  Practice Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-green-500 transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 transition-colors"
                >
                  HIPAA Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center text-gray-300 text-sm">
          <p>
            &copy; 2025 Encore Billing Group. All rights reserved. | HIPAA
            Compliant | ISO Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
