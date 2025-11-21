import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Piadineria La Caveja
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.home.slogan}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.contacts.title}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Viale Carlo Cattaneo 15</p>
              <p>6900 Lugano</p>
              <p>+41 79 765 13 81</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.contacts.hours}</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {t.contacts.hoursValue}
            </p>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/lacaveja_lugano/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                @lacaveja_lugano
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 Piadineria La Caveja. {t.footer.rights}.</p>
          <Link to="/privacy" className="hover:text-primary transition-colors mt-2 md:mt-0">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
};
