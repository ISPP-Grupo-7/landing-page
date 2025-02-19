import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "@/pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Plan from "@/pages/Plan";
import Explore from "./pages/Explore";
import NotFound from "./pages/NotFound";
import PlaceDetail from "@/pages/PlaceDetail";
import Download from "@/pages/Download";

// Legal Pages
import TermsAndConditions from "@/pages/legal/TermsAndConditions";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import CookiesPolicy from "@/pages/legal/CookiesPolicy";
import LegalNotice from "@/pages/legal/LegalNotice";

// Resource Pages
import HelpCenter from "@/pages/resources/HelpCenter";
import UserGuide from "@/pages/resources/UserGuide";
import TravelBlog from "@/pages/resources/TravelBlog";
import Community from "@/pages/resources/Community";

// Company Pages
import AboutUs from "@/pages/company/AboutUs";
import Careers from "@/pages/company/Careers";
import Affiliates from "@/pages/company/Affiliates";
import Contact from "@/pages/company/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/explorar" element={<Explore />} />
            <Route path="/lugar/:id" element={<PlaceDetail />} />
            <Route path="/download" element={<Download />} />
            
            {/* Legal Routes */}
            <Route path="/legal/terms" element={<TermsAndConditions />} />
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal/cookies" element={<CookiesPolicy />} />
            <Route path="/legal/legal-notice" element={<LegalNotice />} />
            
            {/* Resource Routes */}
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/help/guide" element={<UserGuide />} />
            <Route path="/blog" element={<TravelBlog />} />
            <Route path="/community" element={<Community />} />
            
            {/* Company Routes */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
