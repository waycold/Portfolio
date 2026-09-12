import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { cvData } from '../data/content';

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const linkTo = (hash) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`relative flex items-center gap-1 px-3 py-2 rounded-full bg-card/90 backdrop-blur-lg border border-border transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg shadow-black/10' : 'shadow-sm shadow-black/5'
        }`}
        aria-label="Main Navigation"
      >
        <Link
          to={linkTo('#home')}
          className="px-3 py-1.5 text-sm font-medium mr-2 rounded-full text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-serif"
        >
          {cvData.personalInfo.name}
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={linkTo(link.href)}
              className="px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 ml-2">
          <Link
            to={linkTo('#contact')}
            className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
          >
            Get in touch
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="md:hidden min-w-[44px] min-h-[44px] p-2 flex items-center justify-center rounded-full text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-dropdown"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-nav-dropdown"
            className="absolute top-[calc(100%+0.5rem)] left-0 right-0 md:hidden rounded-2xl bg-card border border-border shadow-lg py-2 animate-in fade-in duration-200"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={linkTo(link.href)}
                onClick={() => setMobileMenuOpen(false)}
                className="block min-h-[44px] flex items-center text-sm font-medium text-foreground hover:bg-muted px-5 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                to={linkTo('#contact')}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full justify-center min-h-[44px]"
              >
                Get in touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
