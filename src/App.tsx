import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/index.html" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/data-analyst" element={<DataAnalyst />} />
          <Route path="/data-scientist" element={<DataScientist />} />
          <Route path="/big-data-engineer" element={<BigDataEngineer />} />
          <Route path="/cloud-engineer" element={<CloudEngineer />} />
          <Route path="/ml-engineer" element={<MLEngineer />} />
          <Route path="/interview-packages" element={<InterviewPackages />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
