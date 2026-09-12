import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const id = location.hash.slice(1);
    const timeoutId = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 80);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToHash />
        <div className="min-h-screen bg-background text-foreground flex flex-col antialiased selection:bg-primary selection:text-primary-foreground">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/:projectId" element={<ProjectPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
