import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermLifePlans from "./pages/TermLifePlans";
import ChildPlans from "./pages/ChildPlans";
import EndowmentPlans from "./pages/EndowmentPlans";
import RetirementPlans from "./pages/RetirementPlans";

import InvestmentPlans from "./pages/InvestmentPlans";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/term-life-plans" element={<TermLifePlans />} />
          <Route path="/child-plans" element={<ChildPlans />} />
          <Route path="/endowment-plans" element={<EndowmentPlans />} />
          <Route path="/retirement-plans" element={<RetirementPlans />} />
          
          <Route path="/investment-plans" element={<InvestmentPlans />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
