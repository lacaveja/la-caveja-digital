import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink } from 'lucide-react';

export default function Contacts() {
  const { t } = useLanguage();
  const uberEatsUrl = 'https://www.ubereats.com/ch-it/store/piadineria-la-caveja-20/eQ8gfu_BU6SgL0tkk9X-yg';
  const whatsappNumber = '+41797651381';
  const whatsappMessage = 'Ciao! Vorrei informazioni sulla Piadineria La Caveja.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          {t.contacts.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="p-6">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h2 className="font-bold text-xl mb-3">{t.contacts.address}</h2>
            <p className="text-muted-foreground">
              Viale Carlo Cattaneo 15<br />
              6900 Lugano<br />
              Svizzera
            </p>
          </Card>

          <Card className="p-6">
            <Clock className="h-8 w-8 text-primary mb-4" />
            <h2 className="font-bold text-xl mb-3">{t.contacts.hours}</h2>
            <p className="text-muted-foreground whitespace-pre-line">
              {t.contacts.hoursValue}
            </p>
          </Card>

          <Card className="p-6">
            <Phone className="h-8 w-8 text-primary mb-4" />
            <h2 className="font-bold text-xl mb-3">{t.contacts.phone}</h2>
            <a
              href="tel:+41797651381"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +41 79 765 13 81
            </a>
            <div className="mt-4">
              <Button asChild size="sm" className="w-full">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h2 className="font-bold text-xl mb-3">{t.contacts.email}</h2>
            <a
              href="mailto:luganolacaveja@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors break-all"
            >
              luganolacaveja@gmail.com
            </a>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Instagram className="h-8 w-8 text-primary mr-3" />
                <div>
                  <h2 className="font-bold text-xl">Instagram</h2>
                  <p className="text-sm text-muted-foreground">@lacaveja_lugano</p>
                </div>
              </div>
              <Button asChild variant="outline">
                <a
                  href="https://www.instagram.com/lacaveja_lugano/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Seguici
                </a>
              </Button>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Button asChild className="w-full bg-accent hover:bg-accent/90" size="lg">
            <a href={uberEatsUrl} target="_blank" rel="noopener noreferrer">
              {t.home.orderNow}
            </a>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t.contacts.findUs}</h2>
          <div className="rounded-lg overflow-hidden shadow-medium">
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
      </div>
    </div>
  );
}
