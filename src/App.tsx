import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// GxPify Pages
import GxpHome from "./pages/gxpify/GxpHome";
import AuditsOverview from "./pages/gxpify/AuditsOverview";
import GlpAudits from "./pages/gxpify/GlpAudits";
import GcpAudits from "./pages/gxpify/GcpAudits";
import GmpAudits from "./pages/gxpify/GmpAudits";
import VendorAudits from "./pages/gxpify/VendorAudits";
import GdpAudits from "./pages/gxpify/GdpAudits";
import GpvpAudits from "./pages/gxpify/GpvpAudits";
import SpecializedAudits from "./pages/gxpify/SpecializedAudits";
import GlobalCoverage from "./pages/gxpify/GlobalCoverage";
import IndiaAsean from "./pages/gxpify/IndiaAsean";
import AuditGovernance from "./pages/gxpify/AuditGovernance";
import Resources from "./pages/gxpify/Resources";
import CatFramework from "./pages/gxpify/CatFramework";
import FAQs from "./pages/gxpify/FAQs";
import About from "./pages/gxpify/About";
import Contact from "./pages/gxpify/Contact";
import Blog from "./pages/gxpify/Blog";
import BlogPost from "./pages/gxpify/BlogPost";
import Terms from "./pages/gxpify/legal/Terms";
import Disclaimer from "./pages/gxpify/legal/Disclaimer";
import Privacy from "./pages/gxpify/legal/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GxpHome />} />
          
          {/* GxP Audit Services */}
          <Route path="/audits" element={<AuditsOverview />} />
          <Route path="/audits/gmp" element={<GmpAudits />} />
          <Route path="/audits/gdp" element={<GdpAudits />} />
          <Route path="/audits/glp" element={<GlpAudits />} />
          <Route path="/audits/gcp" element={<GcpAudits />} />
          <Route path="/audits/gpvp" element={<GpvpAudits />} />
          {/* Hidden but accessible */}
          <Route path="/audits/vendor" element={<VendorAudits />} />
          <Route path="/audits/specialized" element={<SpecializedAudits />} />
          
          {/* Coverage & Delivery */}
          <Route path="/india-asean" element={<IndiaAsean />} />
          <Route path="/global-coverage" element={<GlobalCoverage />} />
          
          {/* Audit Governance & Resources */}
          <Route path="/audit-governance" element={<AuditGovernance />} />
          <Route path="/resources" element={<Resources />} />
          
          {/* CAT Framework */}
          <Route path="/cat-framework" element={<CatFramework />} />
          
          {/* Support */}
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          
          {/* Legal */}
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/disclaimer" element={<Disclaimer />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
