export type Language = 'it' | 'en' | 'de' | 'fr';

export interface Translations {
  nav: {
    home: string;
    menu: string;
    about: string;
    contacts: string;
    gallery: string;
  };
  home: {
    slogan: string;
    description: string;
    viewMenu: string;
    orderNow: string;
  };
  about: {
    title: string;
    story: string;
  };
  menu: {
    title: string;
    allergens: string;
    doughOptions: string;
    doughOptionsSubtitle: string;
  };
  contacts: {
    title: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    hoursValue: string;
    findUs: string;
  };
  gallery: {
    title: string;
    comingSoon: string;
  };
  footer: {
    rights: string;
    privacy: string;
  };
}

export const translations: Record<Language, Translations> = {
  it: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'Chi Siamo',
      contacts: 'Contatti',
      gallery: 'Gallery',
    },
    home: {
      slogan: 'La piadina romagnola direttamente a Lugano!',
      description: 'Piadineria La Caveja porta a Lugano la vera piadina romagnola: fresca, generosa e preparata al momento. Perfetta per un pranzo veloce ma gustoso, da vivere in stile take-away con tutto il sapore dell\'Italia.',
      viewMenu: 'Vai al Menu',
      orderNow: 'Ordina su Uber Eats',
    },
    about: {
      title: 'La Nostra Storia',
      story: 'Dopo 15 anni dall\'apertura della prima Piadineria La Caveja in Via Dufour 2 a Lugano, nel 2025 nasce Piadineria La Caveja in Viale Cattaneo 15, continuando la tradizione romagnola con qualità e passione.',
    },
    menu: {
      title: 'Il Nostro Menu',
      allergens: 'Per informazioni dettagliate sugli allergeni, si prega di rivolgersi al personale della Piadineria.',
      doughOptions: 'Opzioni Impasto',
      doughOptionsSubtitle: 'Puoi scegliere tra i seguenti tipi di impasto:',
    },
    contacts: {
      title: 'Contattaci',
      address: 'Indirizzo',
      phone: 'Telefono',
      email: 'Email',
      hours: 'Orari',
      hoursValue: 'Lunedì – Sabato: 11:00 – 16:00\nDomenica: chiuso',
      findUs: 'Dove Siamo',
    },
    gallery: {
      title: 'Gallery',
      comingSoon: 'Galleria in arrivo presto! Stiamo preparando le foto del nostro locale e delle nostre deliziose piadine.',
    },
    footer: {
      rights: 'Tutti i diritti riservati',
      privacy: 'Privacy Policy',
    },
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'About Us',
      contacts: 'Contacts',
      gallery: 'Gallery',
    },
    home: {
      slogan: 'Authentic Romagnola piadina in Lugano!',
      description: 'Piadineria La Caveja brings the authentic Romagnola piadina to Lugano: fresh, generous, and prepared on the spot. Perfect for a quick but delicious lunch, to enjoy take-away style with all the flavor of Italy.',
      viewMenu: 'View Menu',
      orderNow: 'Order on Uber Eats',
    },
    about: {
      title: 'Our Story',
      story: '15 years after opening the first Piadineria La Caveja on Via Dufour 2 in Lugano, in 2025 the new Piadineria La Caveja opens on Viale Cattaneo 15, continuing the Romagnola tradition with quality and passion.',
    },
    menu: {
      title: 'Our Menu',
      allergens: 'For detailed allergen information, please contact our staff.',
      doughOptions: 'Dough Options',
      doughOptionsSubtitle: 'You can choose from the following dough types:',
    },
    contacts: {
      title: 'Contact Us',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Hours',
      hoursValue: 'Monday – Saturday: 11:00 – 16:00\nSunday: closed',
      findUs: 'Find Us',
    },
    gallery: {
      title: 'Gallery',
      comingSoon: 'Gallery coming soon! We are preparing photos of our restaurant and delicious piadinas.',
    },
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
    },
  },
  de: {
    nav: {
      home: 'Home',
      menu: 'Menü',
      about: 'Über Uns',
      contacts: 'Kontakte',
      gallery: 'Galerie',
    },
    home: {
      slogan: 'Authentische Romagnola-Piadina in Lugano!',
      description: 'Piadineria La Caveja bringt die authentische Romagnola-Piadina nach Lugano: frisch, großzügig und direkt zubereitet. Perfekt für ein schnelles, aber köstliches Mittagessen im Take-away-Stil mit dem vollen Geschmack Italiens.',
      viewMenu: 'Menü ansehen',
      orderNow: 'Bei Uber Eats bestellen',
    },
    about: {
      title: 'Unsere Geschichte',
      story: '15 Jahre nach der Eröffnung der ersten Piadineria La Caveja in der Via Dufour 2 in Lugano, eröffnet 2025 die neue Piadineria La Caveja in Viale Cattaneo 15 und setzt die Romagnola-Tradition mit Qualität und Leidenschaft fort.',
    },
    menu: {
      title: 'Unser Menü',
      allergens: 'Für detaillierte Allergeninformationen wenden Sie sich bitte an unser Personal.',
      doughOptions: 'Teigoptionen',
      doughOptionsSubtitle: 'Sie können zwischen folgenden Teigsorten wählen:',
    },
    contacts: {
      title: 'Kontaktieren Sie uns',
      address: 'Adresse',
      phone: 'Telefon',
      email: 'E-Mail',
      hours: 'Öffnungszeiten',
      hoursValue: 'Montag – Samstag: 11:00 – 16:00\nSonntag: geschlossen',
      findUs: 'Finden Sie uns',
    },
    gallery: {
      title: 'Galerie',
      comingSoon: 'Galerie kommt bald! Wir bereiten Fotos von unserem Restaurant und unseren köstlichen Piadinas vor.',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      privacy: 'Datenschutz',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      menu: 'Menu',
      about: 'Qui Sommes-Nous',
      contacts: 'Contacts',
      gallery: 'Galerie',
    },
    home: {
      slogan: 'Piadina authentique de Romagne à Lugano!',
      description: 'Piadineria La Caveja apporte la véritable piadina de Romagne à Lugano : fraîche, généreuse et préparée sur place. Parfaite pour un déjeuner rapide mais savoureux, à déguster en mode à emporter avec toute la saveur de l\'Italie.',
      viewMenu: 'Voir le Menu',
      orderNow: 'Commander sur Uber Eats',
    },
    about: {
      title: 'Notre Histoire',
      story: '15 ans après l\'ouverture de la première Piadineria La Caveja Via Dufour 2 à Lugano, en 2025 naît la nouvelle Piadineria La Caveja Viale Cattaneo 15, poursuivant la tradition romagnole avec qualité et passion.',
    },
    menu: {
      title: 'Notre Menu',
      allergens: 'Pour des informations détaillées sur les allergènes, veuillez contacter notre personnel.',
      doughOptions: 'Options de Pâte',
      doughOptionsSubtitle: 'Vous pouvez choisir parmi les types de pâte suivants:',
    },
    contacts: {
      title: 'Contactez-nous',
      address: 'Adresse',
      phone: 'Téléphone',
      email: 'Email',
      hours: 'Horaires',
      hoursValue: 'Lundi – Samedi: 11:00 – 16:00\nDimanche: fermé',
      findUs: 'Nous Trouver',
    },
    gallery: {
      title: 'Galerie',
      comingSoon: 'Galerie à venir bientôt ! Nous préparons des photos de notre restaurant et de nos délicieuses piadinas.',
    },
    footer: {
      rights: 'Tous droits réservés',
      privacy: 'Politique de confidentialité',
    },
  },
};
