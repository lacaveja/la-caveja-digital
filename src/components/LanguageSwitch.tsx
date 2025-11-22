import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Language } from '@/i18n/translations';
import { cn } from '@/lib/utils';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-0.5 md:space-x-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className={cn(
            "px-1 py-0.5 md:px-2 md:py-1 text-sm md:text-lg hover:bg-accent transition-colors min-w-0",
            language === lang.code ? 'bg-accent' : ''
          )}
          aria-label={lang.label}
          title={lang.label}
        >
          {lang.flag}
        </Button>
      ))}
    </div>
  );
};
