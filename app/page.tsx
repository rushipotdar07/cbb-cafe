import AboutSection from "@/components/AboutSection";
import CoffeeExperience from "@/components/CoffeeExperience";
import MenuSection from "@/components/MenuSection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <main className="relative">
      <section id="experience">
        <CoffeeExperience />
      </section>

      <AboutSection />
      <MenuSection />
      <ProductsSection />
    </main>
  );
}
