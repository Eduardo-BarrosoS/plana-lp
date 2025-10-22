import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Section1 from "./components/Section1";
import { FAQSection } from "./components/FAQSection";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import { Results } from "./components/Results";
import { Footer } from "./components/Footer";
import { BeforeAfterSection } from "./components/BeforeAfterSection";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center">
      <Navbar />
      <Hero id="solucao" />
      <Section1 id="como-funciona" />
      <Results id="resultados" />
      <Benefits id="beneficios" />
      <BeforeAfterSection />
      <FAQSection id="faq" />
      <Banner id="banner" />
      <Footer />
    </div>
  );
}
