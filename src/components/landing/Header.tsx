// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { label: "Services", href: "#services" },
//     { label: "Specialities", href: "/specialities" },
//     { label: "Testimonials", href: "#testimonials" },
//     { label: "About Us", href: "/about" },
//     { label: "Insights", href: "/insights" },
//     { label: "Contact", href: "/contact" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-[#ffffff] border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">M</span>
//             </div>
//             <div className="hidden sm:block">
//               <h1 className="text-xl font-bold text-foreground">
//                 Encore Billing Group
//               </h1>
//               <p className="text-xs text-muted-foreground">
//                 your growth, our promise
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-sm font-medium text-foreground hover:text-primary transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           {/* CTA Button */}
//           <div className="hidden lg:block">
//             <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
//               Request Demo
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <nav className="lg:hidden pb-4 space-y-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-gray-50 rounded-lg transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <button className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
//               Request Demo
//             </button>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import TopBar from "./TopBar";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "About Us", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  const servicesList = [
    { name: "Medical Billing & Coding", slug: "medical-billing-and-coding" },
    { name: "End-to-End RCM", slug: "end-to-end-rcm" },
    { name: "Old AR Recovery", slug: "old-ar-recovery" },
    {
      name: "Credentialing & Enrollment",
      slug: "credentialing-and-enrollment",
    },
    {
      name: "Detailed Performance Reporting",
      slug: "detailed-performance-reporting",
    },
    { name: "Webinars & SOP Updates", slug: "webinars-and-sop-updates" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]">
      <TopBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={menuRef}>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center bg-white">
            <Image
              src="/enlogo.png"
              alt="Encore Billing Group Logo"
              width={46}
              height={46}
              className="object-fit-fill bg-white rounded-md"
            />
            <div className="hidden sm:block leading-tight ml-2">
              <h1 className="lg:text-lg xl:text-xl font-bold text-primary-blue">
                Encore Billing Group
              </h1>
              <p className="text-xs text-[#005c0f] font-medium">
                your growth, our promise
              </p>
            </div>
          </Link>

          {/* ✅ Desktop Navigation (Shadcn-style) */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-6 relative">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) =>
                  item.label === "Services" ? (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-accent-green transition-colors flex items-center gap-1">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] p-4">
                          {/* ✅ Left Featured Block */}
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                href="/services"
                                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                              >
                                <div className="mb-2 text-lg font-semibold text-accent-green">
                                  Our Services
                                </div>
                                <p className="text-muted-foreground text-sm leading-tight">
                                  Explore our full range of medical billing,
                                  RCM, and reporting solutions designed to help
                                  your practice grow efficiently.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>

                          {/* ✅ Services List */}
                          {servicesList.map((service) => (
                            <li key={service.slug}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={`/services/${service.slug}`}
                                  className="block rounded-md p-3 transition-colors hover:text-accent-green"
                                >
                                  <div className="text-sm font-medium text-gray-800">
                                    {service.name}
                                  </div>
                                  <p className="text-sm text-muted-foreground leading-tight">
                                    Learn more about{" "}
                                    {service.name.toLowerCase()}.
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="text-sm font-medium text-gray-700 hover:text-accent-green transition-colors"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="md:px-4 lg:px-5 py-2 bg-accent-green text-white rounded-lg font-medium hover:bg-[#004b87] transition-colors">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
              setIsServicesOpen(false);
            }}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* ✅ Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) =>
              item.label === "Services" ? (
                <div key={item.label} className="space-y-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent-green rounded-lg transition-colors flex justify-between items-center"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isServicesOpen && (
                    <div className="ml-4 space-y-1">
                      {servicesList.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-accent-green rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent-green rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            <Link href="/contact">
              <Button
                variant="default"
                className="w-full mt-4 bg-accent-green text-white hover:bg-[#004b87]"
              >
                Request Demo
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
