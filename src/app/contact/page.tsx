// "use client";

// import type React from "react";

// import Header from "@/components/landing/Header";
// // import Footer from "@/components/footer"
// import { Mail, Phone, MapPin } from "lucide-react";
// import { useState } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <main className="min-h-screen bg-white">
//       <Header />

//       {/* Hero */}
//       <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center animate-fade-in-up">
//             <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               Get in Touch
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Have questions? We'd love to hear from you. Contact us today.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Content */}
//       <section className="py-20 lg:py-32">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Info */}
//             <div className="space-y-8 animate-fade-in-left">
//               <div>
//                 <h2 className="text-3xl font-bold text-foreground mb-8">
//                   Contact Information
//                 </h2>
//               </div>

//               <div className="flex gap-4">
//                 <div className="p-4 bg-primary/10 rounded-lg h-fit">
//                   <Phone className="text-primary" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground mb-1">Phone</h3>
//                   <p className="text-muted-foreground">1-800-MEDCARE</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="p-4 bg-primary/10 rounded-lg h-fit">
//                   <Mail className="text-primary" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground mb-1">Email</h3>
//                   <p className="text-muted-foreground">
//                     info@encorebillinggroup.com
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="p-4 bg-primary/10 rounded-lg h-fit">
//                   <MapPin className="text-primary" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground mb-1">
//                     Address
//                   </h3>
//                   <p className="text-muted-foreground">
//                     123 Healthcare Ave
//                     <br />
//                     Medical City, ST 12345
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <form
//               onSubmit={handleSubmit}
//               className="space-y-6 animate-fade-in-right"
//             >
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
//                   placeholder="Your name"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
//                   placeholder="your@email.com"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
//                   placeholder="(555) 000-0000"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
//                   placeholder="Your message..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors hover:scale-105 active:scale-95"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* <Footer /> */}
//     </main>
//   );
// }
import ContactSection from "@/components/landing/Contact";

export const metadata = {
  title: "Contact Us - Encore Billing Group",
  description:
    "Get in touch with Encore Billing Group for your medical billing needs.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-[#004b87] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 px-6 md:px-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#004b87]">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Have questions? We'd love to hear from you. Contact us today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <ContactSection
          title=""
          subtitle=""
          showInfo={false} // hide contact info
          variant="landing" // this triggers form + map layout
        />
      </section>
    </main>
  );
}
