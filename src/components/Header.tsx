import { Link } from 'react-router-dom';
import { LanguageSwitch } from './LanguageSwitch';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home } from 'lucide-react';

// Icona Menu Ristorante (libro aperto)
const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Pagina sinistra */}
    <path d="M4 4H12V20H4C3.4 20 3 19.6 3 19V5C3 4.4 3.4 4 4 4Z" />
    {/* Pagina destra */}
    <path d="M12 4H20C20.6 4 21 4.4 21 5V19C21 19.6 20.6 20 20 20H12V4Z" />
    {/* Linee di testo sulla pagina sinistra */}
    <line x1="6" y1="7" x2="10" y2="7" strokeWidth="1.5" />
    <line x1="6" y1="10" x2="9" y2="10" strokeWidth="1.5" />
    <line x1="6" y1="13" x2="10" y2="13" strokeWidth="1.5" />
    <line x1="6" y1="16" x2="8" y2="16" strokeWidth="1.5" />
    {/* Linee di testo sulla pagina destra */}
    <line x1="14" y1="7" x2="18" y2="7" strokeWidth="1.5" />
    <line x1="14" y1="10" x2="19" y2="10" strokeWidth="1.5" />
    <line x1="14" y1="13" x2="17" y2="13" strokeWidth="1.5" />
    <line x1="14" y1="16" x2="18" y2="16" strokeWidth="1.5" />
  </svg>
);

export const Header = () => {
  const { t } = useLanguage();

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/menu', label: t.nav.menu },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-14 md:h-16 items-center justify-between px-3 md:px-4">
        <Link to="/" className="flex items-center flex-shrink-0">
          <span className="text-sm md:text-3xl font-logo font-bold text-primary leading-tight">
            <span className="block md:inline">La Caveja 2 Lugano</span>
            <span className="block md:inline md:ml-1">Viale Cattaneo</span>
          </span>
        </Link>

        {/* Navigation - sempre visibile su mobile e desktop */}
        <div className="flex items-center space-x-4 md:space-x-8 flex-shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap flex items-center"
              title={link.label}
            >
              {link.to === '/' ? (
                <span className="flex items-center gap-1.5">
                  <Home className="h-4 w-4 md:h-5 md:w-5" />
                  {link.label}
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <MenuIcon className="h-4 w-4 md:h-5 md:w-5" />
                  {link.label}
                </span>
              )}
            </Link>
          ))}
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
};
