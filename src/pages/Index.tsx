import { Hero } from "@/components/Hero";
import { FeaturedBouquets } from "@/components/FeaturedBouquets";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { CartButton } from "@/components/CartButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <CartButton />
      <Hero />
      <FeaturedBouquets />
      <About />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
