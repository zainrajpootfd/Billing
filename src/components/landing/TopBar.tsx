"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-accent-green text-white py-2">
      <div className="flex items-center justify-center gap-2 lg:gap-6 text-sm flex-wrap">
        <Link
          href="tel:1-800-ENCORE"
          className="flex items-center gap-2 hover:underline hover:text-gray-200 transition-colors"
        >
          <Phone size={16} className="text-white" />
          <span>+1 (512) 988-4965</span>
        </Link>

        <span className="text-accent-foreground hidden sm:inline">|</span>

        <Link
          href="mailto:info@encorebillinggroup.com"
          className="flex items-center gap-2 hover:underline hover:text-gray-200 transition-colors"
        >
          <Mail size={16} className="text-white" />
          <span>Support@encorebillinggroup.com</span>
        </Link>
      </div>
    </div>
  );
}
