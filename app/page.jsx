import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NavLayout from "@/components/NavLayout";

export default function Home() {
  return (
    <NavLayout>
      <Hero />
      <Features />
      <FAQ />
    </NavLayout>
  );
}
