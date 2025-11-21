import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import logoCaveja from '@/assets/logo-caveja.png';

export default function Home() {
  const { t } = useLanguage();
  const uberEatsUrl = 'https://www.ubereats.com/ch-it/store/piadineria-la-caveja-20/eQ8gfu_BU6SgL0tkk9X-yg';
  const googleMapsUrl = 'https://maps.app.goo.gl/2vieCVas314T1RoZ6';
  const whatsappNumber = '+41797651381';
  const whatsappMessage = 'Ciao! Vorrei informazioni sulla Piadineria La Caveja.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Placeholder images for carousel - these will be replaced with actual images
  const carouselImages = [
    { src: '/placeholder.svg', alt: 'Piadina 1' },
    { src: '/placeholder.svg', alt: 'Piadina 2' },
    { src: '/placeholder.svg', alt: 'Locale' },
    { src: '/placeholder.svg', alt: 'Piadina 3' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <img src={logoCaveja} alt="La Caveja Logo" className="h-24 md:h-32 w-auto mx-auto mb-8" />
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

      {/* Image Carousel */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.about.story}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.contacts.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-medium transition-shadow">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{t.contacts.address}</h3>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Viale Carlo Cattaneo 15<br />
                6900 Lugano
              </a>
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
              <MessageCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Invia messaggio
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

          {/* Opening Hours */}
          <div className="max-w-2xl mx-auto mt-8">
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">{t.contacts.hours}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {t.contacts.hoursValue}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.contacts.findUs}</h2>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-medium">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d687.0726866447634!2d8.953685269591808!3d46.00527937154959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47842d9e4c9c9c9d%3A0x7f7f7f7f7f7f7f7f!2sPiadineria%20La%20Caveja!5e0!3m2!1sit!2sch!4v1234567890123!5m2!1sit!2sch"
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
