"use client";

import { toast } from "sonner";

interface FormspreeFormProps {
  formType?: "contact" | "audit" | "quote";
  title?: string;
  onSuccess?: () => void; // ✅ Add this prop to close modal from parent
}

export default function FormspreeForm({
  formType = "contact",
  title,
  onSuccess,
}: FormspreeFormProps) {
  const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID!;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    console.log("🧩 Form ID:", FORM_ID);

    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
        mode: "no-cors", // ✅ avoid fake “network error”
      });

      form.reset();
      toast.success("✅ Message Sent!", {
        description:
          "We’ve received your request and will get back to you soon.",
      });

      if (onSuccess) onSuccess(); // ✅ Close modal after success
    } catch (error) {
      console.error("Formspree Error:", error);
      toast.error("⚠️ Network Error!", {
        description: "Unable to send message. Please check your connection.",
      });
    }
  };

  const getPlaceholder = () => {
    switch (formType) {
      case "audit":
        return "Describe what you’d like us to audit...";
      case "quote":
        return "Tell us what you’d like to see in the quote...";
      default:
        return "Your message...";
    }
  };

  const getButtonText = () => {
    switch (formType) {
      case "audit":
        return "Request Audit";
      case "quote":
        return "Request Quote";
      default:
        return "Send Message";
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-card-blue shadow-lg rounded-2xl p-6 border border-border">
      {title && (
        <h2 className="text-2xl font-semibold mb-4 text-primary-blue">{title}</h2>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-border bg-background p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border border-border bg-background p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green"
        />

        <textarea
          name="message"
          placeholder={getPlaceholder()}
          required
          rows={5}
          className="w-full border border-border bg-background p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green"
        />

        <input type="hidden" name="formType" value={formType} />

        <button
          type="submit"
          className="w-full py-2 px-4 rounded-md text-white bg-accent-green hover:bg-primary-blue transition shadow-md hover:shadow-lg"
        >
          {getButtonText()}
        </button>
      </form>
    </div>
  );
}
