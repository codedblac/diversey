
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Leadership from "./pages/Leadership";
import Departments from "./pages/Departments";
import HelbInvestment from "./pages/HelbInvestment";
import SavingsProducts from "./pages/SavingsProducts";
import LoanProducts from "./pages/LoanProducts";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import NewsMedia from "./pages/NewsMedia";
import TenderPublications from "./pages/TenderPublications";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import OtherServices from "./pages/OtherServices";
import MemberPortal from "./pages/MemberPortal";
import StaffPortal from "./pages/StaffPortal";
import ServicePortal from "./pages/ServicePortal";
import Faqs from './pages/Faqs';
import Login from './pages/Login'

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/loans" element={<LoanProducts />} />
          <Route path="/savings" element={<SavingsProducts />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="/helb-investment" element={<HelbInvestment />} />
          <Route path="/portals/members" element={<MemberPortal />} />
          <Route path="/portals/staff" element={<StaffPortal />} />
          <Route path="/portals/service" element={<ServicePortal />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news-media" element={<NewsMedia />} />
          <Route path="/tender-publications" element={<TenderPublications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
