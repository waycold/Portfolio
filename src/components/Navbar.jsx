import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg shadow-black/40 py-3.5 border-b border-border-color' 
          : 'bg-charcoal-900/85 backdrop-blur-md py-4 border-b border-border-color/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center gap-1.5 text-lg font-bold tracking-tight text-white hover:text-azure-400 transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-azure-500 inline-block shadow-sm shadow-azure-400"></span>
          <span>Portfolio<span className="text-azure-400">.</span></span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-charcoal-850/80 px-3 py-1 rounded-md border border-border-color/80 shadow-inner">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-charcoal-800/80 px-3 py-1.5 rounded transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button Desktop */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="text-xs font-semibold px-3.5 py-2 rounded-md bg-azure-600 hover:bg-azure-500 text-white transition-all shadow-sm shadow-azure-600/30"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md bg-charcoal-850 border border-border-color text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-900 border-b border-border-color px-6 py-4 space-y-2 shadow-xl animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-azure-400 hover:bg-charcoal-850 px-3 py-2 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center text-xs font-semibold px-4 py-2.5 rounded-md bg-azure-600 hover:bg-azure-500 text-white transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
