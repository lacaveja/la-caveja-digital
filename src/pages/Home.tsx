import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Star } from 'lucide-react';

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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect, useRef } from 'react';
import logoCaveja from '@/assets/logo-caveja.png';

// Componente per Google Maps con Store Locator
const GoogleMapComponent = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const initMap = async () => {
      if (!mapContainerRef.current || !isMounted) return;

      try {
        // Attendi che lo script delle Extended Component Library sia caricato
        await new Promise<void>((resolve) => {
          if (document.querySelector('script[src*="extended-component-library"]')) {
            resolve();
          } else {
            const checkScript = setInterval(() => {
              if (document.querySelector('script[src*="extended-component-library"]')) {
                clearInterval(checkScript);
                resolve();
              }
            }, 100);
            timeoutId = setTimeout(() => {
              clearInterval(checkScript);
              resolve();
            }, 5000);
          }
        });

        // Attendi che i web components siano definiti
        await customElements.whenDefined('gmpx-api-loader');
        await customElements.whenDefined('gmpx-store-locator');

        if (!mapContainerRef.current || !isMounted) return;

        // Crea gmpx-api-loader
        const existingLoader = mapContainerRef.current.querySelector('gmpx-api-loader');
        if (existingLoader) {
          existingLoader.remove();
        }

        const apiLoader = document.createElement('gmpx-api-loader');
        apiLoader.setAttribute('key', 'AIzaSyCjO9MkduRfoV-IS72MRaE9jajqf1SuJN0');
        apiLoader.setAttribute('solution-channel', 'GMP_QB_locatorplus_v11_cABDF');
        mapContainerRef.current.appendChild(apiLoader);

        // Attendi che l'API sia caricata
        let attempts = 0;
        const maxAttempts = 50; // 5 secondi totali
        await new Promise<void>((resolve, reject) => {
          const checkApi = () => {
            if (!isMounted) {
              reject(new Error('Component unmounted'));
              return;
            }
            if ((window as Window & { google?: { maps?: unknown } }).google?.maps) {
              resolve();
            } else if (attempts < maxAttempts) {
              attempts++;
              setTimeout(checkApi, 100);
            } else {
              reject(new Error('Google Maps API failed to load'));
            }
          };
          checkApi();
        });

        if (!mapContainerRef.current || !isMounted) return;

        // Crea gmpx-store-locator
        const existingLocator = mapContainerRef.current.querySelector('gmpx-store-locator');
        if (existingLocator) {
          existingLocator.remove();
        }

        const locator = document.createElement('gmpx-store-locator');
        locator.setAttribute('map-id', 'DEMO_MAP_ID');
        locator.style.width = '100%';
        locator.style.height = '100%';
        locator.style.display = 'block';
        mapContainerRef.current.appendChild(locator);

        // Configura il locator
        const CONFIGURATION = {
          "locations": [
            {
              "title": "La Caveja Lugano - Viale Cattaneo 15",
              "address1": "Viale Cattaneo 15",
              "address2": "Lugano, Switzerland",
              "coords": {"lat": 46.005873699999995, "lng": 8.9583646},
              "placeId": "ChIJqVzxN7UthEcRYQg2hqH9ctM",
              // Le foto verranno caricate automaticamente da Google Places se disponibili
              "actions": [
                {
                  "label": "Ordina online",
                  "defaultUrl": "https://www.ubereats.com/ch-it/store/piadineria-la-caveja-20/eQ8gfu_BU6SgL0tkk9X-yg"
                }
              ]
            }
          ],
          "mapOptions": {
            "center": {"lat": 46.005873699999995, "lng": 8.9583646},
            "fullscreenControl": true,
            "mapTypeControl": false,
            "streetViewControl": false,
            "zoom": 17,
            "zoomControl": true,
            "maxZoom": 17,
            "mapId": "DEMO_MAP_ID"
          },
          "mapsApiKey": "AIzaSyCjO9MkduRfoV-IS72MRaE9jajqf1SuJN0",
          "capabilities": {
            "input": false,
            "autocomplete": false,
            "directions": false,
            "distanceMatrix": false,
            "details": true, // Abilita il caricamento automatico di foto e dettagli da Google Places
            "actions": true
          }
        };

        // Attendi che il locator sia pronto
        await new Promise<void>((resolve) => {
          let checkAttempts = 0;
          const maxCheckAttempts = 30;
          const checkLocator = () => {
            if ('configureFromQuickBuilder' in locator && typeof (locator as { configureFromQuickBuilder?: (config: unknown) => void }).configureFromQuickBuilder === 'function') {
              (locator as { configureFromQuickBuilder: (config: unknown) => void }).configureFromQuickBuilder(CONFIGURATION);
              resolve();
            } else if (checkAttempts < maxCheckAttempts) {
              checkAttempts++;
              setTimeout(checkLocator, 200);
            } else {
              resolve();
            }
          };
          checkLocator();
        });

        if (isMounted) {
          setApiLoaded(true);
          setError(null);
        }
      } catch (e) {
        console.error('Error initializing map:', e);
        if (isMounted) {
          setError('Errore nel caricamento della mappa. Riprova più tardi.');
        }
      }
    };

    const initTimeout = setTimeout(initMap, 500);

    return () => {
      isMounted = false;
      clearTimeout(initTimeout);
      if (timeoutId) clearTimeout(timeoutId);
      if (mapContainerRef.current) {
        const loader = mapContainerRef.current.querySelector('gmpx-api-loader');
        const locator = mapContainerRef.current.querySelector('gmpx-store-locator');
        if (loader) loader.remove();
        if (locator) locator.remove();
      }
    };
  }, []);

  return (
    <div ref={mapContainerRef} className="w-full h-[500px] relative">
      <style>{`
        gmpx-store-locator {
          width: 100%;
          height: 100%;
          --gmpx-color-surface: #fff;
          --gmpx-color-on-surface: #212121;
          --gmpx-color-on-surface-variant: #757575;
          --gmpx-color-primary: #1967d2;
          --gmpx-color-outline: #e0e0e0;
          --gmpx-fixed-panel-width-row-layout: 28.5em;
          --gmpx-fixed-panel-height-column-layout: 65%;
          --gmpx-font-family-base: "Roboto", sans-serif;
          --gmpx-font-family-headings: "Roboto", sans-serif;
          --gmpx-font-size-base: 0.875rem;
          --gmpx-hours-color-open: #188038;
          --gmpx-hours-color-closed: #d50000;
          --gmpx-rating-color: #ffb300;
          --gmpx-rating-color-empty: #e0e0e0;
        }
      `}</style>
      {error && (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <p className="text-destructive">{error}</p>
        </div>
      )}
      {!apiLoaded && !error && (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <p className="text-muted-foreground">Caricamento mappa...</p>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const { t } = useLanguage();
  const uberEatsUrl = 'https://www.ubereats.com/ch-it/store/piadineria-la-caveja-20/eQ8gfu_BU6SgL0tkk9X-yg';
  const googleMapsUrl = 'https://maps.app.goo.gl/2vieCVas314T1RoZ6';
  const googleReviewUrl = 'https://g.page/r/CWEINoah_XLTEAE/review';
  const whatsappNumber = '+41797651381';
  const whatsappMessage = 'Ciao! Vorrei informazioni sulla Piadineria La Caveja.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Immagini per lo sfondo hero con slideshow
  const backgroundImages = [
    '/IMG_0294.JPG',
    '/IMG_0307.JPG',
    '/IMG_0316.JPG',
    '/Boscaiola.JPG',
    '/Bresaola.JPG',
    '/Fior Di Piadina.JPG',
    '/Prosciutto e Funghi.JPG',
    '/1711_3105.jpg',
    '/1711_3471.jpg',
    '/salame3.jpg',
    '/nutella..JPG',
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // 3 secondi

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

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
      <section className="relative text-primary-foreground overflow-hidden min-h-[380px] md:min-h-[510px] lg:min-h-[640px] flex items-center justify-center">
        {/* Background Images Slideshow */}
        <div className="absolute inset-0">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
                index === currentBgIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 py-20 md:py-30 lg:py-40">
        </div>
      </section>

      {/* Buttons Section */}
      <section className="py-4 md:py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild variant="secondary" className="text-base px-8">
              <Link to="/menu" className="flex items-center gap-2">
                <MenuIcon className="h-5 w-5" />
                {t.home.viewMenu}
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-base px-8">
              <a href={uberEatsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img
                  src="/uber.png"
                  alt="Uber Eats"
                  className="h-5 w-auto object-contain"
                />
                {t.home.orderNow}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-4 md:py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.home.slogan}</h1>
            <p className="text-lg text-muted-foreground mb-0">
              {t.home.description}
            </p>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center mb-4">
              <img src={logoCaveja} alt="La Caveja Logo" className="h-24 md:h-32 lg:h-40 w-auto mb-4" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.title}</h2>
            <p className="text-lg text-muted-foreground mb-0">
              {t.about.story}
            </p>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="pt-0 pb-16 md:pt-2 md:pb-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-logo text-primary text-center mb-6">
              {t.home.ourPiadinas}
            </h2>
          </div>
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

      {/* Quick Contact Section */}
      <section className="py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t.contacts.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square"
            >
              <Card className="h-full w-full p-5 md:p-6 bg-background border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center group-hover:bg-primary/5">
                <MapPin className="h-10 w-10 md:h-12 md:w-12 text-primary mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-sm md:text-base mb-1 text-foreground">{t.contacts.address}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Viale Carlo Cattaneo 15<br />
                  6900 Lugano
                </p>
              </Card>
            </a>

            <a
              href="tel:+41797651381"
              className="group aspect-square"
            >
              <Card className="h-full w-full p-5 md:p-6 bg-background border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center group-hover:bg-primary/5">
                <Phone className="h-10 w-10 md:h-12 md:w-12 text-primary mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-sm md:text-base mb-1 text-foreground">{t.contacts.phone}</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">
                  +41 79 765 13 81
                </p>
              </Card>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square"
            >
              <Card className="h-full w-full p-5 md:p-6 bg-background border-2 border-border hover:border-[#25D366] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center group-hover:bg-[#25D366]/5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  className="h-10 w-10 md:h-12 md:w-12 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <h3 className="font-bold text-sm md:text-base mb-1 text-foreground">WhatsApp</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Invia messaggio
                </p>
              </Card>
            </a>

            <a
              href="https://www.instagram.com/lacaveja_lugano/"
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square"
            >
              <Card className="h-full w-full p-5 md:p-6 bg-background border-2 border-border hover:border-pink-500 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center group-hover:bg-pink-500/5">
                <Instagram className="h-10 w-10 md:h-12 md:w-12 text-primary group-hover:text-pink-500 mb-2 md:mb-3 group-hover:scale-110 transition-all duration-300" />
                <h3 className="font-bold text-sm md:text-base mb-1 text-foreground">Instagram</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  @lacaveja_lugano
                </p>
              </Card>
            </a>
          </div>

          {/* Opening Hours */}
          <div className="max-w-2xl mx-auto mt-6">
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-1">{t.contacts.hours}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {t.contacts.hoursValue}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t.contacts.findUs}</h2>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-medium relative">
            <GoogleMapComponent />
          </div>
          <div className="text-center mt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
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
