import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          {t.gallery.title}
        </h1>

        <Card className="max-w-2xl mx-auto p-12 text-center">
          <ImageIcon className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            {t.gallery.comingSoon}
          </p>
        </Card>
      </div>
    </div>
  );
}
