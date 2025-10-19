"use client";

import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  const items = (
    <>
      <div className="flex items-center gap-2">
        <Phone size={16} className="text-white" />
        <span>1-800-ENCORE BILLING GROUP</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="mx-2">|</span>
      </div>

      <div className="flex items-center gap-2">
        <Mail size={16} className="text-white" />
        <span>info@encorebillinggroup.com</span>
      </div>
    </>
  );

  return (
    <div className="w-full bg-primary text-white">
      {/* ticker viewport */}
      <div className="overflow-hidden">
        {/* the list that scrolls; content duplicated for seamless loop */}
        <div className="ticker inline-block whitespace-nowrap will-change-transform">
          <div className="ticker__track inline-flex items-center gap-8">
            {items}
            {items} {/* duplicate */}
          </div>
        </div>
      </div>
    </div>
  );
}
