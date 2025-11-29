import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DataAnalyst from "./pages/DataAnalyst";
import DataScientist from "./pages/DataScientist";
import BigDataEngineer from "./pages/BigDataEngineer";
import CloudEngineer from "./pages/CloudEngineer";
import MLEngineer from "./pages/MLEngineer";
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/signup-page";
import InterviewPackages from "./pages/interview-packages";
import MentorApp from "./Mentor_Page/src/App";
import InterviewHome from "./Interview/src/pages/InterviewHome";
import RoundHR from "./Interview/src/pages/Round_HR";
import RoundTechnical from "./Interview/src/pages/Round_Technical";
import RoundCase from "./Interview/src/pages/Round_Case";
import RoundViz from "./Interview/src/pages/Round_Viz";
import RoundBehavioral from "./Interview/src/pages/Round_Behavioral";
import RoundManagerial from "./Interview/src/pages/Round_Managerial";
import MockInterview from "./Interview/src/pages/mock-interview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mentor" element={<Navigate to="/mentor/login" replace />} />
          <Route path="/mentor/*" element={<MentorApp />} />
          <Route path="/index.html" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/data-analyst" element={<DataAnalyst />} />
          <Route path="/data-scientist" element={<DataScientist />} />
          <Route path="/big-data-engineer" element={<BigDataEngineer />} />
          <Route path="/cloud-engineer" element={<CloudEngineer />} />
          <Route path="/ml-engineer" element={<MLEngineer />} />
          <Route path="/interview-packages" element={<InterviewPackages />} />
          <Route path="/interview/data-analyst" element={<Navigate to="/interview" replace />} />
          <Route path="/interview" element={<InterviewHome />} />
          <Route path="/mock-interview" element={<MockInterview />} />
          <Route path="/interview/hr" element={<RoundHR />} />
          <Route path="/interview/technical" element={<RoundTechnical />} />
          <Route path="/interview/case" element={<RoundCase />} />
          <Route path="/interview/viz" element={<RoundViz />} />
          <Route path="/interview/behavioral" element={<RoundBehavioral />} />
          <Route path="/interview/managerial" element={<RoundManagerial />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
