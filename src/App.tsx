import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { StickyMobileBar } from "@/components/sticky-bar";
import {
  GA_MEASUREMENT_ID,
  ADS_CONVERSION_ID,
  installClickTrackers,
} from "@/lib/analytics";

import IndexPage from "@/routes/index";
import AboutPage from "@/routes/about";
import ServicesPage from "@/routes/services";
import ContactPage from "@/routes/contact";
import TermsPage from "@/routes/terms";
import PrivacyPage from "@/routes/privacy";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function GtagLoader() {
  useEffect(() => {
    const gtagId = ADS_CONVERSION_ID || GA_MEASUREMENT_ID;
    if (!gtagId) return;
    if (document.querySelector(`script[data-gtag="${gtagId}"]`)) return;

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
    s1.setAttribute("data-gtag", gtagId);
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${ADS_CONVERSION_ID ? `gtag('config', '${ADS_CONVERSION_ID}');` : ""}
${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}');` : ""}`;
    document.head.appendChild(s2);
  }, []);
  return null;
}

export default function App() {
  useEffect(() => {
    installClickTrackers();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GtagLoader />
      <div className="min-h-screen flex flex-col">
        <SiteNav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
        <StickyMobileBar />
      </div>
    </BrowserRouter>
  );
}
