import { Link } from 'react-router-dom';
import { Instagram, MapPin, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const { t } = useLanguage();
  const googleMapsUrl = 'https://maps.app.goo.gl/2vieCVas314T1RoZ6';
  const googleReviewUrl = 'https://g.page/r/CWEINoah_XLTEAE/review';
  const uberEatsUrl = 'https://www.ubereats.com/ch-it/store/piadineria-la-caveja-20/eQ8gfu_BU6SgL0tkk9X-yg';
  const whatsappNumber = '+41797651381';
  const whatsappMessage = 'Ciao! Vorrei informazioni sulla Piadineria La Caveja.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Piadineria La Caveja Viale Cattaneo Lugano
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.home.slogan}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.contacts.title}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4 inline mr-1" />
                Viale Carlo Cattaneo 15<br />
                6900 Lugano
              </a>
              <a
                href="tel:+41797651381"
                className="block hover:text-primary transition-colors"
              >
                +41 79 765 13 81
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="text-xs gap-1"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                    className="h-3 w-3"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.footer.whatsapp}
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="text-xs gap-1"
              >
                <a
                  href={uberEatsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/uber.png"
                    alt="Uber Eats"
                    className="h-4 w-auto object-contain"
                  />
                  {t.footer.uberEats}
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="text-xs gap-1"
              >
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {t.footer.review}
                </a>
              </Button>
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

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-foreground">© 2025 Piadineria La Caveja Viale Cattaneo Lugano. {t.footer.rights}.</p>
          <Link to="/privacy" className="text-foreground hover:text-primary transition-colors mt-2 md:mt-0 font-medium">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
};
