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
  // {
  //   id: 1,
  //   slug: "medical-billing-services",
  //   title: "Medical Billing Services",
  //   shortDescription: "Streamlined billing solutions for healthcare providers.",
  //   fullDescription:
  //     "We manage end-to-end billing processes ensuring compliance, speed, and accuracy. Our team handles claims submission, payment posting, denial management, and reporting so you can focus on patient care.",
  //   icon: "💼",
  //   features: [
  //     "Claims submission",
  //     "Payment posting",
  //     "Denial management",
  //     "AR follow-up",
  //   ],
  //   benefits: ["Faster payments", "Reduced denials", "Improved cash flow"],
  // },
  // {
  //   id: 2,
  //   slug: "dental-billing-services",
  //   title: "Dental Billing Services",
  //   shortDescription: "Specialized billing for dental practices.",
  //   fullDescription:
  //     "Our dental billing specialists know CDT codes, payer rules, and claim best practices to keep dental revenue flowing smoothly.",
  //   icon: "🦷",
  //   features: ["Procedure coding", "Claim follow-up", "Patient statements"],
  //   benefits: ["Lower denial rates", "Faster reimbursements"],
  // },
  // {
  //   id: 3,
  //   slug: "medical-credentialing-services",
  //   title: "Medical Credentialing Services",
  //   shortDescription: "Provider enrollment and credentialing management.",
  //   fullDescription:
  //     "We manage CAQH, payer enrollment, re-credentialing and all paperwork so your providers are credentialed across payers with minimal friction.",
  //   icon: "📝",
  //   features: ["CAQH setup", "Payer enrollment", "Re-credentialing"],
  //   benefits: ["Faster enrollments", "Fewer administrative delays"],
  // },
  // {
  //   id: 4,
  //   slug: "advanced-credentialing-services",
  //   title: "Advanced Credentialing Services",
  //   shortDescription:
  //     "Simplify payer enrollment, CAQH management, and provider credentialing with our expert support.",
  //   fullDescription:
  //     "Our advanced credentialing services ensure your providers are properly enrolled and credentialed with all major payers. From CAQH management to re-credentialing and compliance checks, we handle the paperwork so you can focus on patient care.",
  //   icon: "🩺",
  //   features: [
  //     "CAQH profile setup and maintenance",
  //     "Payer enrollment and contracting",
  //     "Re-credentialing and compliance management",
  //   ],
  //   benefits: [
  //     "Faster provider enrollment",
  //     "Reduced administrative workload",
  //     "Compliance with payer requirements",
  //   ],
  // },
  // {
  //   id: 5,
  //   slug: "physician-billing-services",
  //   title: "Physician Billing Services",
  //   shortDescription:
  //     "Maximize revenue with accurate, compliant, and efficient physician billing solutions.",
  //   fullDescription:
  //     "We offer complete physician billing services including charge entry, claim submission, and denial management. Our team ensures every claim is processed accurately and quickly to maximize revenue and maintain cash flow.",
  //   icon: "💼",
  //   features: [
  //     "Charge entry and claim submission",
  //     "Payment posting and reconciliation",
  //     "Denial management and appeals",
  //   ],
  //   benefits: [
  //     "Improved cash flow",
  //     "Reduced claim denials",
  //     "Faster reimbursements",
  //   ],
  // },
  // {
  //   id: 6,
  //   slug: "ar-recovery-services",
  //   title: "AR Recovery Services",
  //   shortDescription:
  //     "Recover lost revenue with our specialized Accounts Receivable recovery solutions.",
  //   fullDescription:
  //     "Our AR recovery experts identify unpaid claims, follow up aggressively, and resolve outstanding balances to recover maximum revenue. We focus on aged claims and work efficiently to reduce days in A/R.",
  //   icon: "💰",
  //   features: [
  //     "Aged claims analysis",
  //     "Insurance and patient follow-ups",
  //     "Denial resolution and appeals",
  //   ],
  //   benefits: [
  //     "Increased collections",
  //     "Reduced A/R days",
  //     "Better cash flow management",
  //   ],
  // },
  // {
  //   id: 7,
  //   slug: "coverage-discovery-services",
  //   title: "Coverage Discovery Services",
  //   shortDescription:
  //     "Identify hidden insurance coverage to prevent write-offs and improve reimbursements.",
  //   fullDescription:
  //     "Our coverage discovery services use advanced verification tools to identify active insurance for self-pay or unknown accounts. We help providers capture missed revenue opportunities by uncovering payer details in real-time.",
  //   icon: "🔍",
  //   features: [
  //     "Real-time eligibility checks",
  //     "Insurance coverage verification",
  //     "Automated payer discovery tools",
  //   ],
  //   benefits: [
  //     "Reduced self-pay write-offs",
  //     "Improved collection rates",
  //     "Faster insurance verification",
  //   ],
  // },
  // {
  //   id: 8,
  //   slug: "imaging-center-billing",
  //   title: "Imaging Center Billing",
  //   shortDescription:
  //     "Streamlined medical billing for imaging and radiology centers to boost revenue.",
  //   fullDescription:
  //     "We provide dedicated billing services for imaging centers including radiology coding, charge capture, and claim follow-up. Our specialized billing ensures accurate CPT coding and higher reimbursements for diagnostic services.",
  //   icon: "🖼️",
  //   features: [
  //     "Radiology coding and charge entry",
  //     "Claim submission and follow-up",
  //     "Payment posting and reporting",
  //   ],
  //   benefits: [
  //     "Higher reimbursement rates",
  //     "Accurate radiology coding",
  //     "Faster payment processing",
  //   ],
  // },

  // 💼 NEW SERVICES ADDED BELOW
  // {
  //   id: 1,
  //   slug: "free-audit-and-practice-analysis",
  //   title: "FREE Audit & Practice Analysis",
  //   shortDescription:
  //     "Comprehensive analysis to identify inefficiencies and boost revenue.",
  //   fullDescription:
  //     "We offer a free audit and practice analysis to uncover missed revenue opportunities, coding errors, and workflow gaps. Our insights help you improve billing efficiency and maximize profits.",
  //   icon: "📊",
  //   features: [
  //     "Revenue leakage identification",
  //     "Coding accuracy review",
  //     "Operational efficiency insights",
  //   ],
  //   benefits: [
  //     "Zero-cost performance audit",
  //     "Improved profitability",
  //     "Optimized workflow efficiency",
  //   ],
  // },
  {
    id: 1,
    slug: "medical-billing-and-coding",
    title: "Medical Billing & Coding Services",
    shortDescription:
      "End-to-end billing and coding services for accuracy and compliance.",
    fullDescription:
      "We handle billing and coding from claim creation to payment posting, ensuring every claim is clean and compliant with payer requirements.",
    icon: "🧾",
    features: [
      "ICD & CPT coding",
      "Claim scrubbing and submission",
      "Payment posting and denial management",
    ],
    benefits: [
      "Reduced claim denials",
      "Improved compliance",
      "Faster reimbursements",
    ],
  },
  {
    id: 2,
    slug: "end-to-end-rcm",
    title: "End-to-End Revenue Cycle Management (RCM)",
    shortDescription:
      "Complete RCM solutions from patient registration to payment.",
    fullDescription:
      "Our RCM services optimize every part of your revenue cycle—eligibility, coding, billing, and collections—to keep your revenue healthy.",
    icon: "🔄",
    features: [
      "Eligibility verification",
      "Claim submission",
      "AR follow-up and collections",
    ],
    benefits: [
      "Maximum revenue capture",
      "Reduced A/R days",
      "End-to-end transparency",
    ],
  },
  {
    id: 3,
    slug: "old-ar-recovery",
    title: "Old AR Recovery",
    shortDescription:
      "Recover aged and unpaid claims efficiently to boost cash flow.",
    fullDescription:
      "We specialize in recovering old and denied claims by performing root cause analysis, resubmitting clean claims, and following up persistently.",
    icon: "💸",
    features: ["Claim analysis", "Appeal handling", "Aged claim tracking"],
    benefits: [
      "Recovered lost revenue",
      "Reduced write-offs",
      "Improved cash flow",
    ],
  },
  {
    id: 4,
    slug: "credentialing-and-enrollment",
    title: "Credentialing & Enrollment",
    shortDescription:
      "Simplify provider credentialing and payer enrollment processes.",
    fullDescription:
      "We manage all aspects of credentialing and payer enrollment to ensure providers can start seeing patients faster and stay compliant.",
    icon: "🗂️",
    features: ["CAQH management", "Payer contracting", "Re-credentialing"],
    benefits: [
      "Faster onboarding",
      "Reduced administrative burden",
      "Compliance assurance",
    ],
  },
  {
    id: 5,
    slug: "backend-office-support",
    title: "Backend Office Support",
    shortDescription:
      "Dedicated virtual back-office support for smooth operations.",
    fullDescription:
      "Our trained professionals handle your backend operations—from data entry and appointment scheduling to claims follow-up—so you can focus on patient care.",
    icon: "🖥️",
    features: ["Data entry", "Appointment scheduling", "Billing assistance"],
    benefits: [
      "Lower overhead costs",
      "Increased productivity",
      "Reliable virtual team",
    ],
  },
  {
    id: 6,
    slug: "hipaa-compliance-virtual-assistant",
    title: "HIPAA Compliance Virtual Assistant",
    shortDescription:
      "Secure virtual assistance compliant with HIPAA standards.",
    fullDescription:
      "Our HIPAA-compliant virtual assistants ensure your operations run smoothly while maintaining full patient data confidentiality.",
    icon: "🔒",
    features: [
      "Data-secure virtual tasks",
      "HIPAA-compliant communication",
      "Medical admin support",
    ],
    benefits: [
      "100% patient data security",
      "Cost-effective virtual help",
      "Improved efficiency",
    ],
  },
  {
    id: 7,
    slug: "patient-management-service",
    title: "Patient Management Service",
    shortDescription:
      "Efficient handling of patient records, scheduling, and communications.",
    fullDescription:
      "We streamline your patient management system by handling scheduling, reminders, and follow-ups for improved satisfaction and retention.",
    icon: "👩‍⚕️",
    features: [
      "Patient scheduling",
      "Reminder systems",
      "Communication tracking",
    ],
    benefits: [
      "Higher patient satisfaction",
      "Reduced no-shows",
      "Better engagement",
    ],
  },
  {
    id: 8,
    slug: "ccm-and-rpm-billing",
    title: "CCM & RPM Billing",
    shortDescription:
      "Accurate billing for Chronic Care Management and Remote Patient Monitoring.",
    fullDescription:
      "We help providers maximize reimbursement from CCM and RPM programs by ensuring compliant documentation and timely billing.",
    icon: "📱",
    features: [
      "CCM code management",
      "RPM device data billing",
      "Monthly reporting",
    ],
    benefits: [
      "Improved CCM/RPM revenue",
      "Compliance with CMS guidelines",
      "Streamlined reporting",
    ],
  },
  {
    id: 9,
    slug: "mips-macra-reporting",
    title: "MIPS MACRA Reporting",
    shortDescription:
      "Optimize performance and incentives under MIPS/MACRA programs.",
    fullDescription:
      "Our experts help you meet MIPS/MACRA requirements, track quality measures, and submit data accurately to avoid penalties and earn incentives.",
    icon: "📈",
    features: [
      "Quality measure tracking",
      "Performance optimization",
      "Data submission support",
    ],
    benefits: [
      "Avoid CMS penalties",
      "Earn incentive payments",
      "Maintain compliance",
    ],
  },
  {
    id: 10,
    slug: "detailed-performance-reporting",
    title: "Detailed Performance Reporting",
    shortDescription:
      "Comprehensive reports providing insight into your financial and operational performance.",
    fullDescription:
      "We deliver detailed analytics and reports that help you track performance, spot trends, and make data-driven business decisions.",
    icon: "📊",
    features: [
      "Custom KPI dashboards",
      "Revenue and claim reports",
      "Data-driven recommendations",
    ],
    benefits: [
      "Greater visibility",
      "Strategic decision-making",
      "Continuous improvement",
    ],
  },
  {
    id: 11,
    slug: "webinars-and-sop-updates",
    title: "Webinars & Updates for New SOP/Guidelines",
    shortDescription:
      "Stay ahead with regular webinars and compliance updates.",
    fullDescription:
      "We keep your staff informed and compliant through educational webinars, training sessions, and updates whenever new SOPs or payer guidelines are released.",
    icon: "🎓",
    features: [
      "Live and recorded webinars",
      "Guideline change alerts",
      "Staff training resources",
    ],
    benefits: [
      "Up-to-date compliance",
      "Enhanced staff knowledge",
      "Fewer claim errors",
    ],
  },
];

export const getServiceBySlug = (slug: string | undefined) => {
  if (!slug) return undefined;
  return servicesData.find((s) => s.slug === slug);
};
