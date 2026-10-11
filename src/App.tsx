import { Navigate, Route, Routes } from 'react-router-dom';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { ScrollManager } from './components/layout/ScrollManager';
import Home from './pages/home/Home';
import PassportPage from './pages/platform/passport/PassportPage';
import TracePage from './pages/platform/trace/TracePage';
import CarbonPage from './pages/platform/carbon/CarbonPage';
import VerifyPage from './pages/platform/verify/VerifyPage';
import InsightsPage from './pages/platform/insights/InsightsPage';
import ConnectPage from './pages/platform/connect/ConnectPage';
import ComingSoon from './pages/platform/ComingSoon';

export default function App() {
  return (
    <div className="tt-wash min-h-screen">
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('main')?.focus();
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-tt-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform/passport" element={<PassportPage />} />
          <Route path="/platform/trace" element={<TracePage />} />
          <Route path="/platform/carbon" element={<CarbonPage />} />
          <Route path="/platform/verify" element={<VerifyPage />} />
          <Route path="/platform/insights" element={<InsightsPage />} />
          <Route path="/platform/connect" element={<ConnectPage />} />
          {/* Any future product not yet built falls back to a placeholder; unknown slugs go home. */}
          <Route path="/platform/:slug" element={<ComingSoon />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
