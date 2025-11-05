import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Terms of Service - Encore Billing Group",
  description:
    "Read Encore Billing Group's Terms of Service to understand the terms and conditions of using our services.",
};

export default function TermsOfService() {
  return (
    <main className="bg-white text-[#004b87] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 px-6 md:px-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Scale className="text-[#004b87] w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Please read these terms carefully before using our services.
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
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and Encore Billing Group ("Company," "we," "us," or "our") regarding your use of our medical billing, revenue cycle management, credentialing, and related healthcare administrative services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use our Services.
            </p>
          </div>

          {/* Services Description */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#2ba24c] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#004b87]">Description of Services</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg space-y-3 text-gray-700 leading-relaxed">
              <p>
                Encore Billing Group provides comprehensive healthcare revenue cycle management services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Medical billing and coding services</li>
                <li>Claims submission and processing</li>
                <li>Accounts receivable (AR) management and recovery</li>
                <li>Provider credentialing and enrollment</li>
                <li>Revenue cycle management (RCM)</li>
                <li>Chronic Care Management (CCM) and Remote Patient Monitoring (RPM) billing</li>
                <li>MIPS/MACRA reporting and compliance</li>
                <li>Performance reporting and analytics</li>
                <li>Backend office support and virtual assistant services</li>
                <li>HIPAA-compliant administrative support</li>
              </ul>
              <p className="mt-4">
                Specific services, fees, and terms will be detailed in a separate Service Agreement or Statement of Work ("SOW") executed between the parties.
              </p>
            </div>
          </div>

          {/* Eligibility and Account */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Eligibility and Account</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>Eligibility:</strong> You must be a licensed healthcare provider, healthcare facility, or authorized representative to use our Services. You represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are at least 18 years of age</li>
                <li>You have the legal authority to enter into these Terms</li>
                <li>You have all necessary licenses and credentials to operate your healthcare practice</li>
                <li>All information you provide is accurate, current, and complete</li>
              </ul>
              <p className="mt-4">
                <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </div>
          </div>

          {/* Client Responsibilities */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-[#2ba24c] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#004b87]">Client Responsibilities</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg space-y-3 text-gray-700 leading-relaxed">
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, complete, and timely information necessary for service delivery</li>
                <li>Maintain all required licenses, credentials, and certifications</li>
                <li>Comply with all applicable healthcare laws, regulations, and professional standards</li>
                <li>Ensure that all patient authorizations and consents are properly obtained</li>
                <li>Promptly notify us of any changes to your practice, credentials, or payer contracts</li>
                <li>Review and approve claims submissions before processing (if required by agreement)</li>
                <li>Maintain appropriate professional liability insurance</li>
                <li>Pay all fees and charges in accordance with the Service Agreement</li>
                <li>Use our Services only for lawful purposes and in compliance with these Terms</li>
              </ul>
            </div>
          </div>

          {/* HIPAA and Business Associate Agreement */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">HIPAA Compliance and Business Associate Agreement</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                As a Business Associate under HIPAA, we will enter into a Business Associate Agreement (BAA) with you. The BAA will govern the use and disclosure of Protected Health Information (PHI) and is incorporated into these Terms by reference. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Only disclose PHI to us as necessary for service delivery</li>
                <li>Obtain all required patient authorizations and consents</li>
                <li>Notify us immediately of any restrictions on the use or disclosure of PHI</li>
                <li>Comply with all HIPAA requirements applicable to covered entities</li>
              </ul>
              <p className="mt-4">
                We will maintain the privacy and security of PHI in accordance with HIPAA and the terms of the BAA.
              </p>
            </div>
          </div>

          {/* Fees and Payment */}
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Fees and Payment</h2>
            <div className="bg-blue-50 p-6 rounded-lg space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>Service Fees:</strong> Service fees will be specified in your Service Agreement or SOW. Fees may be based on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Percentage of collections or revenue</li>
                <li>Flat monthly or annual fees</li>
                <li>Per-claim or per-transaction charges</li>
                <li>Hourly rates for specific services</li>
              </ul>
              <p className="mt-4">
                <strong>Payment Terms:</strong> Unless otherwise specified, invoices are due within 30 days of invoice date. Late payments may be subject to interest charges and may result in suspension of Services. You are responsible for all applicable taxes.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Intellectual Property</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>Our Property:</strong> All content, software, technology, processes, and materials provided by us in connection with the Services, including but not limited to our proprietary systems, methodologies, reports, and documentation, are owned by us or our licensors and are protected by intellectual property laws.
              </p>
              <p>
                <strong>Your Data:</strong> You retain all ownership rights to your data, including patient information and practice data. You grant us a limited, non-exclusive license to use your data solely for the purpose of providing the Services.
              </p>
            </div>
          </div>

          {/* Confidentiality */}
          <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Confidentiality</h2>
            <div className="bg-blue-50 p-6 rounded-lg space-y-3 text-gray-700 leading-relaxed">
              <p>
                Both parties agree to maintain the confidentiality of all proprietary and confidential information disclosed during the course of the Services. This obligation survives termination of these Terms and any Service Agreement. Confidential information includes, but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Business and financial information</li>
                <li>Patient information and PHI</li>
                <li>Proprietary systems and methodologies</li>
                <li>Pricing and fee structures</li>
                <li>Any information marked as confidential or that should reasonably be understood to be confidential</li>
              </ul>
            </div>
          </div>

          {/* Warranties and Disclaimers */}
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="text-[#2ba24c] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#004b87]">Warranties and Disclaimers</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>Service Warranty:</strong> We warrant that we will perform the Services in a professional and workmanlike manner, in accordance with industry standards and applicable laws and regulations.
              </p>
              <p>
                <strong>Disclaimer of Warranties:</strong> EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>
              <p>
                <strong>No Guarantee of Results:</strong> While we strive to maximize collections and improve revenue cycle performance, we do not guarantee specific collection rates, denial reduction percentages, or other performance metrics. Results may vary based on numerous factors outside our control.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Limitation of Liability</h2>
            <div className="bg-blue-50 p-6 rounded-lg space-y-3 text-gray-700 leading-relaxed">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT OF FEES PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
              <p>
                WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF DATA, OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.
              </p>
            </div>
          </div>

          {/* Indemnification */}
          <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Indemnification</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                You agree to indemnify, defend, and hold harmless Encore Billing Group and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms or any applicable law</li>
                <li>Your breach of any representation or warranty</li>
                <li>Any inaccurate or incomplete information provided by you</li>
                <li>Any claims brought by patients or third parties related to your practice or services</li>
              </ul>
            </div>
          </div>

          {/* Term and Termination */}
          <div className="animate-fade-in" style={{ animationDelay: "1.1s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Term and Termination</h2>
            <div className="bg-blue-50 p-6 rounded-lg space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>Term:</strong> These Terms remain in effect until terminated by either party in accordance with this section or as specified in your Service Agreement.
              </p>
              <p>
                <strong>Termination by You:</strong> You may terminate Services at any time by providing written notice as specified in your Service Agreement, typically 30-90 days in advance.
              </p>
              <p>
                <strong>Termination by Us:</strong> We may terminate or suspend Services immediately upon:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your material breach of these Terms or the Service Agreement</li>
                <li>Non-payment of fees</li>
                <li>Your violation of any applicable law or regulation</li>
                <li>Any conduct that we reasonably believe may harm our reputation or business</li>
              </ul>
              <p className="mt-4">
                <strong>Effect of Termination:</strong> Upon termination, you remain responsible for all fees incurred prior to termination. We will return or destroy your data in accordance with HIPAA requirements and the BAA, unless retention is required by law.
              </p>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Dispute Resolution</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of [Your State/Jurisdiction], without regard to its conflict of law provisions.
              </p>
              <p>
                <strong>Dispute Resolution:</strong> Any disputes arising out of or relating to these Terms or the Services shall be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization], or in a court of competent jurisdiction in [Your Jurisdiction].
              </p>
            </div>
          </div>

          {/* General Provisions */}
          <div className="animate-fade-in" style={{ animationDelay: "1.3s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">General Provisions</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>Entire Agreement:</strong> These Terms, together with any Service Agreement or BAA, constitute the entire agreement between the parties regarding the Services.
              </p>
              <p>
                <strong>Modifications:</strong> We reserve the right to modify these Terms at any time. Material changes will be communicated to you, and continued use of Services after such changes constitutes acceptance.
              </p>
              <p>
                <strong>Assignment:</strong> You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.
              </p>
              <p>
                <strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full effect.
              </p>
              <p>
                <strong>Waiver:</strong> No waiver of any provision shall be effective unless in writing and signed by the waiving party.
              </p>
              <p>
                <strong>Force Majeure:</strong> Neither party shall be liable for delays or failures in performance due to circumstances beyond reasonable control, including natural disasters, pandemics, or government actions.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in bg-blue-50 p-6 rounded-lg" style={{ animationDelay: "1.4s" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#004b87]">Contact Us</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Encore Billing Group</strong></p>
                <p>Email: legal@encorebillinggroup.com</p>
                <p>Phone: [Your Contact Number]</p>
                <p>Address: [Your Business Address]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

