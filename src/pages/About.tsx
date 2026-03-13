import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import CTAButton from "@/components/CTAButton";
import { Handshake, Shield, Scale } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Friedland Law | Your Fight. Our Battle.™</title>
        <meta name="description" content="Learn about Friedland Law's mission to provide direct attorney access for every personal injury client." />
      </Helmet>
      <Header />
      <main>
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">About Friedland Law</h1>
            <p className="text-xl text-gold italic">Your Fight. Our Battle.™</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              [PLACEHOLDER] Friedland Law was founded on a simple but powerful principle: every injured person deserves direct access to the attorney handling their case. Not a case manager. Not a call center. Your attorney.
            </p>
            <p className="text-muted-foreground mb-4">
              [PLACEHOLDER] We combine the litigation power of a large firm with the personal attention of a boutique practice. Our "No Case Manager Guarantee" means you always speak directly with the lawyer fighting for your recovery.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Handshake, title: "Direct Access", text: "Your attorney is always a phone call away. No gatekeepers." },
                { icon: Scale, title: "Maximum Results", text: "We prepare every case for trial, maximizing your leverage." },
                { icon: Shield, title: "Client Protection", text: "Your interests come first. Always. No exceptions." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="text-center p-6">
                  <Icon className="text-gold mx-auto mb-4" size={40} />
                  <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to Fight for Your Recovery?</h2>
            <CTAButton text="Start Your Free Case Review" href="/contact" variant="primary" />
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default About;
