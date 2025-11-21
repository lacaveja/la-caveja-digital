import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          {t.about.title}
        </h1>

        <Card className="max-w-3xl mx-auto p-8 md:p-12">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t.about.story}
          </p>
        </Card>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {t.home.slogan}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.home.description}
          </p>
        </div>
      </div>
    </div>
  );
}
