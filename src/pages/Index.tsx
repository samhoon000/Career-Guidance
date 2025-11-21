import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CareerTracks from "@/components/CareerTracks";
import ProgressDashboard from "@/components/ProgressDashboard";
import LearningPath from "@/components/LearningPath";
import AIMentor from "@/components/AIMentor";
import ResearchBacking from "@/components/ResearchBacking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CareerTracks />
        <ProgressDashboard />
        <LearningPath />
        <AIMentor />
        <ResearchBacking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
