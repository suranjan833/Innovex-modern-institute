import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import OpenBookLoader from './components/common/OpenBookLoader';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ResearchPage from './pages/ResearchPage';
import AcademicSupportPage from './pages/AcademicSupportPage';
import NoticeBoardPage from './pages/NoticeBoardPage';
import FacilitiesPage from './pages/FacilitiesPage';
import TrainingPlacementPage from './pages/TrainingPlacementPage';
import RecognitionPage from './pages/RecognitionPage';
import ContactPage from './pages/ContactPage';
import ApplyPage from './pages/ApplyPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <OpenBookLoader visible={loading} />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/academic-support" element={<AcademicSupportPage />} />
          <Route path="/notices" element={<NoticeBoardPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/training-placement" element={<TrainingPlacementPage />} />
          <Route path="/recognition" element={<RecognitionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      </Layout>
    </>
  );
}
