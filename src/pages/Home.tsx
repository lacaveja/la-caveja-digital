import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, MessageCircle, Star } from 'lucide-react';
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
  const googleReviewUrl = 'https://g.page/r/CWEINoah_XLTEAE/review';
  const whatsappNumber = '+41797651381';
  const whatsappMessage = 'Ciao! Vorrei informazioni sulla Piadineria La Caveja.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Immagini del carosello - unificate da home e menu
  const carouselImages = [
    { src: '/piadina-1.jpg', alt: 'Piadina con noci, radicchio e formaggio' },
    { src: '/piadina-2.jpg', alt: 'Piadina con prosciutto, formaggio e rucola' },
    { src: '/piadina-3.jpg', alt: 'Piadina con pollo, lattuga e pomodori' },
    { src: '/piadina-4.jpg', alt: 'Piadina con bresaola e formaggio fresco' },
    { src: '/IMG_0294.JPG', alt: 'Piadine La Caveja' },
    { src: '/IMG_0307.JPG', alt: 'Piadine fresche' },
    { src: '/IMG_0316.JPG', alt: 'Piadine con ingredienti' },
    { src: '/Boscaiola.JPG', alt: 'Piadina Boscaiola' },
    { src: '/Bresaola.JPG', alt: 'Piadina Bresaola' },
    { src: '/Fior Di Piadina.JPG', alt: 'Fior di Piadina' },
    { src: '/Prosciutto e Funghi.JPG', alt: 'Piadina Prosciutto e Funghi' },
    { src: '/1711_3105.jpg', alt: 'Piadine La Caveja' },
    { src: '/1711_3471.jpg', alt: 'Piadina La Caveja' },
    { src: '/salame3.jpg', alt: 'Piadina con salame' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 md:py-32 overflow-hidden" style={{ background: 'var(--hero-pattern)' }}>
        {/* Bagliore bianco al centro - più intenso */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Bagliore esterno più ampio e leggero */}
          <div className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-white/15 rounded-full blur-3xl" />
          {/* Bagliore interno più intenso e concentrato */}
          <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-white/25 rounded-full blur-2xl" />
          {/* Bagliore centrale più intenso */}
          <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-white/35 rounded-full blur-xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <img src={logoCaveja} alt="La Caveja Logo" className="h-32 md:h-44 lg:h-52 w-auto mx-auto mb-8 relative z-10" />
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
          <h2 className="text-3xl md:text-4xl font-logo text-primary text-center mb-12">
            {t.home.ourPiadinas}
          </h2>
          <div className="max-w-4xl mx-auto relative">
            <Carousel className="w-full relative" opts={{ loop: true }}>
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[400px] md:h-[500px] object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                            e.currentTarget.alt = 'Immagine non disponibile';
                          }}
                        />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Pulsanti di navigazione dentro il riquadro */}
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 border-2 bg-background/90 hover:bg-background shadow-lg rounded-full z-20" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 border-2 bg-background/90 hover:bg-background shadow-lg rounded-full z-20" />
            </Carousel>
          </div>
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
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-medium transition-all cursor-pointer h-full hover:scale-105">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{t.contacts.address}</h3>
                <p className="text-sm text-muted-foreground">
                  Viale Carlo Cattaneo 15<br />
                  6900 Lugano
                </p>
              </Card>
            </a>

            <a
              href="tel:+41797651381"
              className="block"
            >
              <Card className="p-6 hover:shadow-medium transition-all cursor-pointer h-full hover:scale-105">
                <Phone className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{t.contacts.phone}</h3>
                <p className="text-sm text-muted-foreground">
                  +41 79 765 13 81
                </p>
              </Card>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-medium transition-all cursor-pointer h-full hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  className="h-8 w-8 mb-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  Invia messaggio
                </p>
              </Card>
            </a>

            <a
              href="https://www.instagram.com/lacaveja_lugano/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-medium transition-all cursor-pointer h-full hover:scale-105">
                <Instagram className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-sm text-muted-foreground">
                  @lacaveja_lugano
                </p>
              </Card>
            </a>
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
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-medium relative group">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-all duration-300 group-hover:bg-black/5"
              aria-label="Apri Piadineria La Caveja su Google Maps"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg border border-border">
                <p className="text-sm font-semibold text-primary">Clicca per aprire su Google Maps</p>
                <p className="text-xs text-muted-foreground mt-1">Viale Carlo Cattaneo 15, 6900 Lugano</p>
              </div>
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.2664554638222!2d8.9583646!3d46.005873699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47842db537f15ca9%3A0xd372fda186360861!2sLa%20Caveja%20Lugano%20-%20Viale%20Cattaneo%2015!5e0!3m2!1sit!2sch!4v1763749173079!5m2!1sit!2sch"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Piadineria La Caveja - Viale Carlo Cattaneo 15, 6900 Lugano"
            />
          </div>
          <div className="text-center mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Visualizza su Google Maps
            </a>
            <Button
              asChild
              variant="outline"
              className="gap-2"
            >
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                Lascia una recensione
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
