import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const text = {
    it: {
      message: 'Utilizziamo cookie per migliorare la tua esperienza di navigazione. Continuando a utilizzare questo sito, accetti il nostro utilizzo dei cookie in conformità con la legislazione svizzera sulla protezione dei dati.',
      accept: 'Accetta',
      privacy: 'Privacy Policy',
    },
    en: {
      message: 'We use cookies to improve your browsing experience. By continuing to use this site, you accept our use of cookies in accordance with Swiss data protection legislation.',
      accept: 'Accept',
      privacy: 'Privacy Policy',
    },
    de: {
      message: 'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern. Durch die weitere Nutzung dieser Website akzeptieren Sie unsere Verwendung von Cookies gemäß dem Schweizer Datenschutzgesetz.',
      accept: 'Akzeptieren',
      privacy: 'Datenschutz',
    },
    fr: {
      message: 'Nous utilisons des cookies pour améliorer votre expérience de navigation. En continuant à utiliser ce site, vous acceptez notre utilisation des cookies conformément à la législation suisse sur la protection des données.',
      accept: 'Accepter',
      privacy: 'Politique de confidentialité',
    },
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground p-4 shadow-strong">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm flex-1">{text[language].message}</p>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href="/privacy">{text[language].privacy}</a>
          </Button>
          <Button size="sm" onClick={handleAccept}>
            {text[language].accept}
          </Button>
        </div>
      </div>
    </div>
  );
};
