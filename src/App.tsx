import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalNotice from './pages/LegalNotice';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'terms' | 'privacy' | 'legal'>('landing');

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Redirect to main app for login
  const handleGetStarted = () => {
    // In development, redirect to localhost:5173 (main app)
    // In production, this would be the actual domain of the main app
    const mainAppUrl = import.meta.env.PROD ? 'https://app.subastasiapro.com' : 'http://localhost:5173';
    window.location.href = mainAppUrl;
  };

  // Handle navigation between legal pages
  const handleNavigate = (page: 'terms' | 'privacy' | 'legal') => {
    setCurrentPage(page);
  };

  // Handle back to landing
  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  // Render the appropriate page
  switch (currentPage) {
    case 'terms':
      return <TermsOfService onBack={handleBackToLanding} />;
    case 'privacy':
      return <PrivacyPolicy onBack={handleBackToLanding} />;
    case 'legal':
      return <LegalNotice onBack={handleBackToLanding} />;
    default:
      return (
        <LandingPage 
          onGetStarted={handleGetStarted}
          onNavigate={handleNavigate}
        />
      );
  }
}

export default App;