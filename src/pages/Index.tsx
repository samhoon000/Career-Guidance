import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CareerTracks from "@/components/CareerTracks";
import ResearchBacking from "@/components/ResearchBacking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-24">
        <Hero />
        <CareerTracks />
        <ResearchBacking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
