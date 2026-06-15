import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { WhoSection } from "@/components/who-section";
import { ExpectationsSection } from "@/components/expectations-section";
import { ProcessSection } from "@/components/process-section";
import { CalculatorSection } from "@/components/calculator-section";
import { ComparisonSection } from "@/components/comparison-section";
import { ServicesSection } from "@/components/services-section";
import { GuaranteeSection } from "@/components/guarantee-section";
import { FAQSection } from "@/components/faq-section";
import { EmailSection } from "@/components/email-section";
import { Footer } from "@/components/footer";
import { ScrollEffects } from "@/components/scroll-effects";

export default function Home() {
  return (
    <main>
      <ScrollEffects />
      <Header />
      <HeroSection />
      <WhoSection />
      <ExpectationsSection />
      <ProcessSection />
      <CalculatorSection />
      <ComparisonSection />
      <ServicesSection />
      <GuaranteeSection />
      <FAQSection />
      <EmailSection />
      <Footer />
    </main>
  );
}
