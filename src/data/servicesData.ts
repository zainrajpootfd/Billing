// data/servicesData.ts
import { ReactNode } from "react";

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: ReactNode;
  features: string[];
  benefits: string[];
}

export const servicesData: Service[] = [
  {
    id: 1,
    slug: "medical-billing-services",
    title: "Medical Billing Services",
    shortDescription: "Streamlined billing solutions for healthcare providers.",
    fullDescription:
      "We manage end-to-end billing processes ensuring compliance, speed, and accuracy. Our team handles claims submission, payment posting, denial management, and reporting so you can focus on patient care.",
    icon: "💼",
    features: [
      "Claims submission",
      "Payment posting",
      "Denial management",
      "AR follow-up",
    ],
    benefits: ["Faster payments", "Reduced denials", "Improved cash flow"],
  },
  {
    id: 2,
    slug: "dental-billing-services",
    title: "Dental Billing Services",
    shortDescription: "Specialized billing for dental practices.",
    fullDescription:
      "Our dental billing specialists know CDT codes, payer rules, and claim best practices to keep dental revenue flowing smoothly.",
    icon: "🦷",
    features: ["Procedure coding", "Claim follow-up", "Patient statements"],
    benefits: ["Lower denial rates", "Faster reimbursements"],
  },
  {
    id: 3,
    slug: "medical-credentialing-services",
    title: "Medical Credentialing Services",
    shortDescription: "Provider enrollment and credentialing management.",
    fullDescription:
      "We manage CAQH, payer enrollment, re-credentialing and all paperwork so your providers are credentialed across payers with minimal friction.",
    icon: "📝",
    features: ["CAQH setup", "Payer enrollment", "Re-credentialing"],
    benefits: ["Faster enrollments", "Fewer administrative delays"],
  },
  {
    id: 4,
    slug: "advanced-credentialing-services",
    title: "Advanced Credentialing Services",
    shortDescription:
      "Simplify payer enrollment, CAQH management, and provider credentialing with our expert support.",
    fullDescription:
      "Our advanced credentialing services ensure your providers are properly enrolled and credentialed with all major payers. From CAQH management to re-credentialing and compliance checks, we handle the paperwork so you can focus on patient care.",
    icon: "🩺",
    features: [
      "CAQH profile setup and maintenance",
      "Payer enrollment and contracting",
      "Re-credentialing and compliance management",
    ],
    benefits: [
      "Faster provider enrollment",
      "Reduced administrative workload",
      "Compliance with payer requirements",
    ],
  },
  {
    id: 5,
    slug: "physician-billing-services",
    title: "Physician Billing Services",
    shortDescription:
      "Maximize revenue with accurate, compliant, and efficient physician billing solutions.",
    fullDescription:
      "We offer complete physician billing services including charge entry, claim submission, and denial management. Our team ensures every claim is processed accurately and quickly to maximize revenue and maintain cash flow.",
    icon: "💼",
    features: [
      "Charge entry and claim submission",
      "Payment posting and reconciliation",
      "Denial management and appeals",
    ],
    benefits: [
      "Improved cash flow",
      "Reduced claim denials",
      "Faster reimbursements",
    ],
  },
  {
    id: 6,
    slug: "ar-recovery-services",
    title: "AR Recovery Services",
    shortDescription:
      "Recover lost revenue with our specialized Accounts Receivable recovery solutions.",
    fullDescription:
      "Our AR recovery experts identify unpaid claims, follow up aggressively, and resolve outstanding balances to recover maximum revenue. We focus on aged claims and work efficiently to reduce days in A/R.",
    icon: "💰",
    features: [
      "Aged claims analysis",
      "Insurance and patient follow-ups",
      "Denial resolution and appeals",
    ],
    benefits: [
      "Increased collections",
      "Reduced A/R days",
      "Better cash flow management",
    ],
  },
  {
    id: 7,
    slug: "coverage-discovery-services",
    title: "Coverage Discovery Services",
    shortDescription:
      "Identify hidden insurance coverage to prevent write-offs and improve reimbursements.",
    fullDescription:
      "Our coverage discovery services use advanced verification tools to identify active insurance for self-pay or unknown accounts. We help providers capture missed revenue opportunities by uncovering payer details in real-time.",
    icon: "🔍",
    features: [
      "Real-time eligibility checks",
      "Insurance coverage verification",
      "Automated payer discovery tools",
    ],
    benefits: [
      "Reduced self-pay write-offs",
      "Improved collection rates",
      "Faster insurance verification",
    ],
  },
  {
    id: 8,
    slug: "imaging-center-billing",
    title: "Imaging Center Billing",
    shortDescription:
      "Streamlined medical billing for imaging and radiology centers to boost revenue.",
    fullDescription:
      "We provide dedicated billing services for imaging centers including radiology coding, charge capture, and claim follow-up. Our specialized billing ensures accurate CPT coding and higher reimbursements for diagnostic services.",
    icon: "🖼️",
    features: [
      "Radiology coding and charge entry",
      "Claim submission and follow-up",
      "Payment posting and reporting",
    ],
    benefits: [
      "Higher reimbursement rates",
      "Accurate radiology coding",
      "Faster payment processing",
    ],
  },
];

export const getServiceBySlug = (slug: string | undefined) => {
  if (!slug) return undefined;
  return servicesData.find((s) => s.slug === slug);
};
