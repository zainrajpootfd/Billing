import { Shield, Lock, Eye, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - Encore Billing Group",
  description:
    "Read Encore Billing Group's Privacy Policy to understand how we protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-[#004b87] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 px-6 md:px-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Shield className="text-[#004b87] w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Your privacy is important to us. Learn how we protect and handle your information.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Encore Billing Group ("we," "our," or "us") is committed to protecting your privacy and maintaining the confidentiality of your personal and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our medical billing and revenue cycle management services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-[#2ba24c] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#004b87]">Information We Collect</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-[#004b87]">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may collect personal information that you provide directly to us, including but not limited to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 ml-4">
                  <li>Name, contact information (email, phone number, mailing address)</li>
                  <li>Professional credentials and licensing information</li>
                  <li>Practice information and business details</li>
                  <li>Payment and billing information</li>
                  <li>Account credentials and authentication information</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[#004b87]">Protected Health Information (PHI)</h3>
                <p className="text-gray-700 leading-relaxed">
                  As a Business Associate under HIPAA, we may receive, process, and maintain Protected Health Information (PHI) on behalf of healthcare providers. This information may include:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 ml-4">
                  <li>Patient demographics and identifiers</li>
                  <li>Medical billing and claims data</li>
                  <li>Insurance information and eligibility data</li>
                  <li>Treatment codes and diagnosis information</li>
                  <li>Payment and remittance information</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[#004b87]">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you visit our website or use our services, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#2ba24c] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#004b87]">How We Use Your Information</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Delivery:</strong> To provide medical billing, revenue cycle management, credentialing, and related services</li>
                <li><strong>Claims Processing:</strong> To submit, track, and manage insurance claims on your behalf</li>
                <li><strong>Communication:</strong> To respond to your inquiries, provide customer support, and send important service updates</li>
                <li><strong>Compliance:</strong> To comply with legal obligations, HIPAA requirements, and healthcare regulations</li>
                <li><strong>Business Operations:</strong> To improve our services, conduct analytics, and manage our business relationships</li>
                <li><strong>Fraud Prevention:</strong> To detect and prevent fraudulent activities and ensure the security of our systems</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing and Disclosure */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-[#2ba24c] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#004b87]">Information Sharing and Disclosure</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We do not sell your personal information or PHI. We may share information only in the following circumstances:
              </p>
              <div>
                <h3 className="font-semibold mb-2 text-[#004b87]">Service Providers</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may share information with trusted third-party service providers who assist us in operating our business and providing services, such as:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 ml-4">
                  <li>Insurance payers and clearinghouses for claims processing</li>
                  <li>Technology vendors and cloud service providers</li>
                  <li>Payment processors and financial institutions</li>
                  <li>All service providers are bound by contractual obligations to maintain confidentiality and comply with HIPAA</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[#004b87]">Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may disclose information when required by law, court order, or regulatory authority, including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 ml-4">
                  <li>Compliance with HIPAA and healthcare regulations</li>
                  <li>Response to legal process or government requests</li>
                  <li>Protection of our rights and the safety of our clients</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border-l-4 border-[#2ba24c] p-4 rounded mt-4">
                <p className="text-gray-800 font-semibold mb-2">Mobile Information Policy</p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* HIPAA Compliance */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">HIPAA Compliance</h2>
            <div className="bg-blue-50 p-6 rounded-lg space-y-3 text-gray-700 leading-relaxed">
              <p>
                As a Business Associate under the Health Insurance Portability and Accountability Act (HIPAA), we are committed to maintaining the privacy and security of Protected Health Information (PHI). We:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Enter into Business Associate Agreements (BAAs) with all covered entities</li>
                <li>Implement administrative, physical, and technical safeguards to protect PHI</li>
                <li>Conduct regular risk assessments and security audits</li>
                <li>Train our staff on HIPAA compliance and privacy requirements</li>
                <li>Report any breaches of unsecured PHI as required by law</li>
                <li>Maintain comprehensive documentation of our compliance activities</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Data Security</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication and access controls</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Employee training on data security best practices</li>
                <li>Incident response and breach notification procedures</li>
                <li>Compliance with industry standards and certifications (e.g., SOC 2, ISO 27001)</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Your Rights</h2>
            <div className="bg-blue-50 p-6 rounded-lg space-y-3 text-gray-700 leading-relaxed">
              <p>Depending on your jurisdiction, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal and contractual obligations</li>
                <li><strong>Opt-Out:</strong> Opt out of certain communications or data processing activities</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Cookies and Tracking Technologies</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality and performance</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling cookies may limit certain website functionality.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Data Retention</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. For PHI, we follow HIPAA-mandated retention requirements, which typically require retention for a minimum of six years.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Children's Privacy</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </div>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Changes to This Privacy Policy</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="animate-fade-in bg-blue-50 p-6 rounded-lg" style={{ animationDelay: "1.1s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Contact Us</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Encore Billing Group</strong></p>
                <p>Email: privacy@encorebillinggroup.com</p>
                <p>Phone: [Your Contact Number]</p>
                <p>Address: [Your Business Address]</p>
              </div>
              <p className="mt-4">
                For privacy-related requests or to exercise your rights, please include sufficient information to allow us to verify your identity and process your request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

