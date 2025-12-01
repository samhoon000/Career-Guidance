import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CareerTracks from "@/components/CareerTracks";
import ResearchBacking from "@/components/ResearchBacking";
import Footer from "@/components/Footer";
import NotesAssistantWidget from "@/components/NotesAssistantWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-white/80">
      <Header />
      <main className="space-y-32 pb-24 pt-16">
        <Hero />
        <CareerTracks />
        <ResearchBacking />
      </main>
      <Footer />
      <NotesAssistantWidget />
    </div>
  );
};

export default Index;
