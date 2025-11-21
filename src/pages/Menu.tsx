import { useLanguage } from '@/contexts/LanguageContext';
import { menuCategories } from '@/i18n/menuTranslations';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export default function Menu() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
          {t.menu.title}
        </h1>

        <Alert className="mb-12 max-w-3xl mx-auto">
          <Info className="h-4 w-4" />
          <AlertDescription>{t.menu.allergens}</AlertDescription>
        </Alert>

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
