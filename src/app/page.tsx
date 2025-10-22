import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Section1 from "./components/Section1";
import { FAQSection } from "./components/FAQSection";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import { Results } from "./components/Results";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex  mx-auto flex-col items-center justify-center min-h-screen">
      <Navbar />
      <Hero id="solucao" />
      <Section1 id="como-funciona" />
      <Results id="resultados" />
      <Benefits id="beneficios" />
      <FAQSection id="faq" />
      <Banner id="banner" />
      <Footer />
    </div>
  );
}
