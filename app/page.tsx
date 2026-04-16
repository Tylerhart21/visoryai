import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhoSection } from "@/components/who-section"
import { ExpectationsSection } from "@/components/expectations-section"
import { ProcessSection } from "@/components/process-section"
import { CalculatorSection } from "@/components/calculator-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ServicesSection } from "@/components/services-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FAQSection } from "@/components/faq-section"
import { EmailSection } from "@/components/email-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <div id="who">
        <WhoSection />
      </div>
      <div id="expectations">
        <ExpectationsSection />
      </div>
      <div id="process">
        <ProcessSection />
      </div>
      <div id="calculator">
        <CalculatorSection />
      </div>
      <div id="comparison">
        <ComparisonSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="guarantee">
        <GuaranteeSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="email">
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
