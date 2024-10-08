import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import NavLayout from "@/components/NavLayout";

export default function Home() {
  return (
    <NavLayout>
      <Hero />
      <FAQ />
    </NavLayout>
  );
}
