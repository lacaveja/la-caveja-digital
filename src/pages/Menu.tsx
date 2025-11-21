import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { menuCategories } from '@/i18n/menuTranslations';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Info } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Menu() {
  const { t, language } = useLanguage();
  const [isAllergensOpen, setIsAllergensOpen] = useState(false);

  // Immagini del carosello sopra il menu
  const menuImages = [
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
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Carosello immagini sopra il titolo */}
        <div className="mb-8 max-w-4xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {menuImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[250px] md:h-[300px] object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
          {t.menu.title}
        </h1>

        {/* Pulsante collapsible per info allergeni */}
        <div className="mb-12 max-w-3xl mx-auto flex justify-center">
          <Collapsible open={isAllergensOpen} onOpenChange={setIsAllergensOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs">
                <Info className="h-3 w-3 mr-2" />
                Info allergeni
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <Card className="p-4 bg-muted/50">
                <p className="text-sm text-muted-foreground">{t.menu.allergens}</p>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                {category.title[language]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="p-6 hover:shadow-medium transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg text-italian-black">{item.name}</h3>
                      <span className="font-bold text-primary whitespace-nowrap ml-2">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description[language]}
                    </p>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
