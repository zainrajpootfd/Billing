import {
  Activity, // Gastroenterology
  Brain, // Neurosurgery
  Heart, // Thoracic Surgery
  FileText, // Pathology
  Sun, // Dermatology
  Stethoscope, // Oncology
  Monitor, // Radiology
  Users, // OB/GYN
  Box, // Ambulatory Surgery / DME
} from "lucide-react";

export interface Hero {
  title: string;
  description: string;
  image: string;
}

export interface MissionVision {
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface WhyChooseUs {
  points: string[];
  image: string;
}

export interface Specialty {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export const hero: Hero = {
  title: "Empowering Healthcare Practices Since 2012",
  description:
    "At Encore Billing Group, we provide comprehensive medical billing and revenue cycle management solutions. We help healthcare providers streamline operations, reduce administrative burdens, and enhance revenue cycles.",
  image: "/healthcare-professional-doctor.3.jpg",
};

export const missionVision: MissionVision[] = [
  {
    title: "Our Mission",
    description:
      "Deliver innovative, tailored solutions that address the unique needs of each healthcare provider. From credentialing and billing to accounts receivable recovery, we foster healthy practices and robust revenue systems.",
  },
  {
    title: "Our Vision",
    description:
      "Set new industry standards by providing exceptional service and cutting-edge solutions that enable our clients to achieve optimal success and efficiency.",
  },
];

export const coreValues: CoreValue[] = [
  {
    title: "People",
    description:
      "We prioritize the growth, well-being, and contributions of our team members.",
  },
  {
    title: "Integrity",
    description: "We uphold honesty and ethical behavior in all our actions.",
  },
  {
    title: "Innovation",
    description:
      "We drive progress through creative and forward-thinking solutions.",
  },
  {
    title: "Teamwork",
    description:
      "We believe in the power of collaboration to achieve collective success.",
  },
  {
    title: "Excellence",
    description:
      "We strive for the highest standards of quality and performance.",
  },
];

export const whyChooseUs: WhyChooseUs = {
  points: [
    "Proven results: Improved claim accuracy and faster collections.",
    "Comprehensive services: Billing, credentialing, AR recovery, and more.",
    "Tailored solutions: Customized to meet your practice's unique needs.",
  ],
  image: "/healthcare-professional-doctor.jpg",
};

export const specialtiesWithIcons: Specialty[] = [
  { name: "Ambulatory Surgery", icon: Box },
  { name: "Neurosurgery", icon: Brain },
  { name: "Thoracic Surgery", icon: Heart },
  { name: "Pathology", icon: FileText },
  { name: "Dermatology", icon: Sun },
  { name: "Oncology", icon: Stethoscope },
  { name: "Gastroenterology", icon: Activity },
  { name: "Radiology", icon: Monitor },
  { name: "OB/GYN", icon: Users },
  { name: "Durable Medical Equipment (DME)", icon: Box },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with [Your Company Name] has been a game-changer for our practice. Their expertise in medical billing and revenue cycle management has streamlined our operations and improved our cash flow.",
    author: "Dr. [Client Name], [Practice Name]",
  },
  {
    quote:
      "The team at [Your Company Name] is responsive, knowledgeable, and dedicated to our success. They have significantly reduced our claim denials and improved our reimbursement rates.",
    author: "[Client Name], [Organization Name]",
  },
];
