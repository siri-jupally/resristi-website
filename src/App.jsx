import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import FacilitiesPage from './pages/FacilitiesPage';
import AACPage from './pages/AACPage';
import AGRPage from './pages/AGRPage';
import PyrolysisPage from './pages/PyrolysisPage';
import RecyclingPage from './pages/RecyclingPage';
import OurProcess from './pages/OurProcess';
import ImpactDashboard from './pages/ImpactDashboard';
import ReportsCertifications from './pages/ReportsCertifications';
import ClientsIndustries from './pages/ClientsIndustries';
import Blogs from './pages/Blogs';
import ZeroWasteScience from './pages/blogs/ZeroWasteScience';
import ContactPage from './pages/ContactPage';
import { Toaster } from './components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/facilities/aac" element={<AACPage />} />
          <Route path="/facilities/agr" element={<AGRPage />} />
          <Route path="/facilities/pyrolysis" element={<PyrolysisPage />} />
          <Route path="/facilities/recycling" element={<RecyclingPage />} />
          <Route path="/process" element={<OurProcess />} />
          <Route path="/impact" element={<ImpactDashboard />} />
          <Route path="/reports" element={<ReportsCertifications />} />
          <Route path="/clients" element={<ClientsIndustries />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/zero-waste-science" element={<ZeroWasteScience />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;