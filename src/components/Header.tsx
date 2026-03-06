import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, Globe, Shield } from 'lucide-react';

export function Header() {
  const { t, i18n } = useTranslation();
  const { isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isCircuit = location.pathname.includes('/circuit');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const navItems = isCircuit ? [
    { label: t('nav.home'), path: '/circuit' },
    { label: t('nav.rankings'), path: '/circuit/rankings' },
    { label: t('nav.schedule'), path: '/circuit/schedule' },
    { label: t('nav.register'), path: '/circuit/register' },
    { label: t('nav.rules'), path: '/circuit/rules' },
    { label: t('nav.prizes'), path: '/circuit/prizes' }
  ] : [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.projects'), path: '/projects' },
    { label: t('nav.partners'), path: '/partners' },
    { label: t('nav.register'), path: '/circuit/register' },
    { label: t('nav.contact'), path: '/contact' },
    { label: t('nav.faq'), path: '/faq' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-base section-padding py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link to={isCircuit ? '/circuit' : '/'} className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AGORA%20LOGO-xt7P91EK6iX5SV7Hx9TLP7ThgRrlRs.jpeg"
              alt="AGORA Logo"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-lg bg-gradient-to-r from-agora-purple to-agora-orange bg-clip-text text-transparent">
                AGORA
              </div>
              <div className="text-xs text-gray-600">
                {isCircuit ? t('nav.circuit') : t('nav.agoraEvents')}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-agora-purple font-bold'
                    : 'text-gray-700 hover:text-agora-orange'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Admin Button */}
            {isAdmin ? (
              <Link
                to="/admin/dashboard"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-agora-purple text-white hover:opacity-90 transition-opacity"
              >
                <Shield size={18} />
                <span className="font-semibold text-sm">Admin</span>
              </Link>
            ) : (
              <Link
                to="/admin/login"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-800 transition-colors"
              >
                <Shield size={18} />
                <span className="font-semibold text-sm">Admin</span>
              </Link>
            )}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-agora-light hover:bg-gray-200 transition-colors"
              title={i18n.language === 'en' ? 'Français' : 'English'}
            >
              <Globe size={18} />
              <span className="font-semibold text-sm">
                {i18n.language.toUpperCase()}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-2 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-agora-purple text-white'
                    : 'text-gray-700 hover:bg-agora-light'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
