import AdvantageBento from "@/components/AdvantageBento";
import ContactFooter from "@/components/ContactFooter";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkShowcase from "@/components/WorkShowcase";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <AdvantageBento />
      <WorkShowcase />
      <ContactFooter />
    </main>
  );
}
