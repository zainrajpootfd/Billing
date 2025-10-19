export const metadata = {
  title: "About Us - Encore Billing Group",
  description:
    "Learn more about Encore Billing Group, our mission, vision, and values in medical billing services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Encore Billing Group
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in medical billing excellence
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower healthcare providers with innovative billing
                solutions that maximize revenue, reduce administrative burden,
                and allow them to focus on what matters most: patient care.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading medical billing company trusted by healthcare
                providers nationwide for our expertise, reliability, and
                commitment to excellence.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li>• Integrity and transparency in all our dealings</li>
                <li>• Excellence in every service we provide</li>
                <li>• Innovation in billing solutions</li>
                <li>• Commitment to HIPAA compliance and data security</li>
                <li>• Partnership approach with our clients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
