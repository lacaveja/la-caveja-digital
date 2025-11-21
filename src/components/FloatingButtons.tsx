import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingButtons = () => {
  const whatsappNumber = '+41797651381';
  const whatsappMessage = 'Ciao! Vorrei informazioni sulla Piadineria La Caveja.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-strong hover:shadow-glow transition-all"
        asChild
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contattaci su WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};
