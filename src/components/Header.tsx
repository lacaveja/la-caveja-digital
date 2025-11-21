import { Link } from 'react-router-dom';
import { LanguageSwitch } from './LanguageSwitch';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const { t } = useLanguage();

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/menu', label: t.nav.menu },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-3xl font-logo font-bold text-primary">La Caveja Viale Cattaneo Lugano</span>
        </Link>

        {/* Navigation - sempre visibile su mobile e desktop */}
        <div className="flex items-center space-x-2 md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
};
