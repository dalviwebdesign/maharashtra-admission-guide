import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { AllCourses } from './pages/AllCourses';
import { UndergraduateCourses } from './pages/UndergraduateCourses';
import { PostgraduateCourses } from './pages/PostgraduateCourses';
import { IntegratedCourses } from './pages/IntegratedCourses';
import { DirectSecondYear } from './pages/DirectSecondYear';
import { CourseDetail } from './pages/CourseDetail';
import { EligibilityChecker } from './pages/EligibilityChecker';
import { DocumentsChecklist } from './pages/DocumentsChecklist';
import { CandidatureTypes } from './pages/CandidatureTypes';
import { ReservationsTfws } from './pages/ReservationsTfws';
import { CapProcess } from './pages/CapProcess';
import { OfficialLinks } from './pages/OfficialLinks';
import { About } from './pages/About';
import { DisclaimerSources } from './pages/DisclaimerSources';
import { NotFound } from './pages/NotFound';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/undergraduate-courses" element={<UndergraduateCourses />} />
            <Route path="/postgraduate-courses" element={<PostgraduateCourses />} />
            <Route path="/integrated-courses" element={<IntegratedCourses />} />
            <Route path="/direct-second-year" element={<DirectSecondYear />} />
            <Route path="/checker" element={<EligibilityChecker />} />
            <Route path="/documents" element={<DocumentsChecklist />} />
            <Route path="/candidature-types" element={<CandidatureTypes />} />
            <Route path="/reservations-tfws" element={<ReservationsTfws />} />
            <Route path="/cap-process" element={<CapProcess />} />
            <Route path="/official-links" element={<OfficialLinks />} />
            <Route path="/about" element={<About />} />
            <Route path="/disclaimer" element={<DisclaimerSources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
