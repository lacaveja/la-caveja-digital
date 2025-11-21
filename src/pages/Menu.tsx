import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { menuCategories } from '@/i18n/menuTranslations';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Info } from 'lucide-react';

export default function Menu() {
  const { t, language } = useLanguage();
  const [isAllergensOpen, setIsAllergensOpen] = useState(false);

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
          {t.menu.title}
        </h1>

        {/* Opzioni Impasto */}
        <div className="mb-8 max-w-4xl mx-auto">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-bold text-center mb-2 text-primary">
              {t.menu.doughOptions}
            </h3>
            <p className="text-sm text-center text-muted-foreground mb-4">
              {t.menu.doughOptionsSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4">
              <span className="px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium">
                Classico
              </span>
              <span className="px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium">
                8 Cereali
              </span>
              <span className="px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium">
                Senza Glutine
              </span>
              <span className="px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium">
                Khorasan
              </span>
              <span className="px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium">
                Farro
              </span>
              <span className="px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium">
                Patate e Curcuma
              </span>
            </div>
            
            {/* Pulsante collapsible per info allergeni dentro il riquadro */}
            <div className="flex justify-center pt-4 border-t border-border/50">
              <Collapsible open={isAllergensOpen} onOpenChange={setIsAllergensOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Info className="h-3 w-3 mr-2" />
                    {t.menu.allergensButton}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <Card className="p-4 bg-muted/50">
                    <p className="text-sm text-muted-foreground">{t.menu.allergens}</p>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </Card>
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
