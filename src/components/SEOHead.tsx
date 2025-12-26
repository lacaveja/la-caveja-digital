import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  ogImage = 'https://lacaveja.ch/logo-caveja.png',
  canonical,
}: SEOHeadProps) => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const baseUrl = 'https://lacaveja.ch';
    const currentPath = location.pathname;
    const canonicalUrl = canonical || `${baseUrl}${currentPath}${location.search ? location.search : ''}`;

    // Update title
    if (title) {
      document.title = title;
    }

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    if (title) {
      updateOGTag('og:title', title);
    }
    if (description) {
      updateOGTag('og:description', description);
    }
    updateOGTag('og:url', canonicalUrl);
    updateOGTag('og:image', ogImage);

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    if (title) {
      updateTwitterTag('twitter:title', title);
    }
    if (description) {
      updateTwitterTag('twitter:description', description);
    }
    updateTwitterTag('twitter:image', ogImage);

    // Update hreflang tags based on current language
    const updateHreflang = (lang: string) => {
      const hreflangUrl = `${baseUrl}${currentPath}${lang === 'it' ? '' : `?lang=${lang}`}`;
      let hreflangLink = document.querySelector(`link[hreflang="${lang}"]`);
      if (!hreflangLink) {
        hreflangLink = document.createElement('link');
        hreflangLink.setAttribute('rel', 'alternate');
        hreflangLink.setAttribute('hreflang', lang);
        document.head.appendChild(hreflangLink);
      }
      hreflangLink.setAttribute('href', hreflangUrl);
    };

    ['it', 'en', 'de', 'fr'].forEach(updateHreflang);
  }, [title, description, keywords, ogImage, canonical, location, language]);

  return null;
};

