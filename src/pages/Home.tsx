import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const uberEatsUrl = 'https://www.ubereats.com/ch-it/store/piadineria-la-caveja-20/eQ8gfu_BU6SgL0tkk9X-yg';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.home.slogan}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t.home.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild variant="secondary" className="text-lg">
              <Link to="/menu">{t.home.viewMenu}</Link>
            </Button>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-lg">
              <a href={uberEatsUrl} target="_blank" rel="noopener noreferrer">
                {t.home.orderNow}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.about.story}
            </p>
            <Button asChild variant="outline">
              <Link to="/about">{t.nav.about}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.contacts.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-medium transition-shadow">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{t.contacts.address}</h3>
              <p className="text-sm text-muted-foreground">
                Viale Carlo Cattaneo 15<br />
                6900 Lugano
              </p>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-shadow">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{t.contacts.phone}</h3>
              <a
                href="tel:+41797651381"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +41 79 765 13 81
              </a>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-shadow">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{t.contacts.email}</h3>
              <a
                href="mailto:luganolacaveja@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                luganolacaveja@gmail.com
              </a>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-shadow">
              <Instagram className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Instagram</h3>
              <a
                href="https://www.instagram.com/lacaveja_lugano/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                @lacaveja_lugano
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.contacts.findUs}</h2>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-medium">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.8634785729454!2d8.951891676738988!3d46.00529227121637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47842d9f7f7f7f7f%3A0x7f7f7f7f7f7f7f7f!2sViale%20Carlo%20Cattaneo%2015%2C%206900%20Lugano%2C%20Switzerland!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Piadineria La Caveja Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
