import { Language } from './translations';

export interface MenuItem {
  name: string;
  price: string;
  description: Record<Language, string>;
}

export interface MenuCategory {
  title: Record<Language, string>;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    title: {
      it: 'SOLO A LUGANO',
      en: 'ONLY IN LUGANO',
      de: 'NUR IN LUGANO',
      fr: 'SEULEMENT À LUGANO',
    },
    items: [
      {
        name: 'Brie e Zucchine',
        price: '13,00 CHF',
        description: {
          it: 'Brie, zucchine grigliate, pomodori, rucola, salsa rosa',
          en: 'Brie, grilled zucchini, tomatoes, arugula, pink sauce',
          de: 'Brie, gegrillte Zucchini, Tomaten, Rucola, Rosa Sauce',
          fr: 'Brie, courgettes grillées, tomates, roquette, sauce rose',
        },
      },
      {
        name: 'Allegra',
        price: '13,00 CHF',
        description: {
          it: 'Porchetta, squacquerò, scamorza, pomodoro',
          en: 'Porchetta, squacquerone cheese, scamorza, tomato',
          de: 'Porchetta, Squacquerone-Käse, Scamorza, Tomate',
          fr: 'Porchetta, fromage squacquerone, scamorza, tomate',
        },
      },
      {
        name: 'Venere',
        price: '12,00 CHF',
        description: {
          it: 'Gamberetti, mozzarella, zucchine grigliate, pomodori, salsa rosa',
          en: 'Shrimp, mozzarella, grilled zucchini, tomatoes, pink sauce',
          de: 'Garnelen, Mozzarella, gegrillte Zucchini, Tomaten, Rosa Sauce',
          fr: 'Crevettes, mozzarella, courgettes grillées, tomates, sauce rose',
        },
      },
      {
        name: 'Occhio di Bue',
        price: '12,00 CHF',
        description: {
          it: 'Uovo sodo, squacquerò, pomodori, insalata, maionese',
          en: 'Hard-boiled egg, squacquerone cheese, tomatoes, lettuce, mayonnaise',
          de: 'Hartgekochtes Ei, Squacquerone-Käse, Tomaten, Salat, Mayonnaise',
          fr: 'Œuf dur, fromage squacquerone, tomates, salade, mayonnaise',
        },
      },
      {
        name: 'Trentina',
        price: '13,90 CHF',
        description: {
          it: 'Speck, squacquerò, brie, zucchine grigliate, salsa rosa',
          en: 'Speck, squacquerone cheese, brie, grilled zucchini, pink sauce',
          de: 'Speck, Squacquerone-Käse, Brie, gegrillte Zucchini, Rosa Sauce',
          fr: 'Speck, fromage squacquerone, brie, courgettes grillées, sauce rose',
        },
      },
      {
        name: 'Diavola',
        price: '13,00 CHF',
        description: {
          it: 'Salame piccante, squacquerò, peperoni grigliati',
          en: 'Spicy salami, squacquerone cheese, grilled peppers',
          de: 'Scharfe Salami, Squacquerone-Käse, gegrillte Paprika',
          fr: 'Salami piquant, fromage squacquerone, poivrons grillés',
        },
      },
      {
        name: 'Crudo e Fichi',
        price: '13,00 CHF',
        description: {
          it: 'Bresaola, grana, rucola, olio evo',
          en: 'Bresaola, parmesan, arugula, extra virgin olive oil',
          de: 'Bresaola, Parmesan, Rucola, natives Olivenöl extra',
          fr: 'Bresaola, parmesan, roquette, huile d\'olive extra vierge',
        },
      },
      {
        name: '4 Formaggi',
        price: '12,00 CHF',
        description: {
          it: 'Cotto, quattro formaggi',
          en: 'Cooked ham, four cheeses',
          de: 'Gekochter Schinken, vier Käsesorten',
          fr: 'Jambon cuit, quatre fromages',
        },
      },
      {
        name: 'Gaggibriele',
        price: '13,90 CHF',
        description: {
          it: 'Bresaola, caprino, insalata, pepe, salsa rosa',
          en: 'Bresaola, goat cheese, lettuce, pepper, pink sauce',
          de: 'Bresaola, Ziegenkäse, Salat, Pfeffer, Rosa Sauce',
          fr: 'Bresaola, fromage de chèvre, salade, poivre, sauce rose',
        },
      },
      {
        name: 'Verdure',
        price: '13,50 CHF',
        description: {
          it: 'Bresaola, verdure grigliate',
          en: 'Bresaola, grilled vegetables',
          de: 'Bresaola, gegrilltes Gemüse',
          fr: 'Bresaola, légumes grillés',
        },
      },
      {
        name: 'Rustica',
        price: '13,90 CHF',
        description: {
          it: 'Porchetta, mozzarella, rucola, origano',
          en: 'Porchetta, mozzarella, arugula, oregano',
          de: 'Porchetta, Mozzarella, Rucola, Oregano',
          fr: 'Porchetta, mozzarella, roquette, origan',
        },
      },
      {
        name: 'Americana',
        price: '12,00 CHF',
        description: {
          it: 'Tacchino, brie, melanzane grigliate, patè d\'olive',
          en: 'Turkey, brie, grilled eggplant, olive pâté',
          de: 'Truthahn, Brie, gegrillte Aubergine, Olivenpaste',
          fr: 'Dinde, brie, aubergines grillées, pâté d\'olives',
        },
      },
    ],
  },
  {
    title: {
      it: 'LE BURGER',
      en: 'THE BURGERS',
      de: 'DIE BURGER',
      fr: 'LES BURGERS',
    },
    items: [
      {
        name: 'Classic Burger',
        price: '13,50 CHF',
        description: {
          it: 'Hamburger, fontina, insalata, salsa BBQ',
          en: 'Burger patty, fontina cheese, lettuce, BBQ sauce',
          de: 'Burger-Patty, Fontina-Käse, Salat, BBQ-Sauce',
          fr: 'Steak haché, fromage fontina, salade, sauce BBQ',
        },
      },
      {
        name: 'Royal Burger',
        price: '14,00 CHF',
        description: {
          it: 'Hamburger, gorgonzola, rucola, pomodorini, maionese',
          en: 'Burger patty, gorgonzola, arugula, cherry tomatoes, mayonnaise',
          de: 'Burger-Patty, Gorgonzola, Rucola, Kirschtomaten, Mayonnaise',
          fr: 'Steak haché, gorgonzola, roquette, tomates cerises, mayonnaise',
        },
      },
      {
        name: 'Caveja Burger',
        price: '14,50 CHF',
        description: {
          it: 'Hamburger, squacquerò, cipolla fritta, peperoni grigliati, pomodorini, salsa BBQ',
          en: 'Burger patty, squacquerone cheese, fried onion, grilled peppers, cherry tomatoes, BBQ sauce',
          de: 'Burger-Patty, Squacquerone-Käse, frittierte Zwiebel, gegrillte Paprika, Kirschtomaten, BBQ-Sauce',
          fr: 'Steak haché, fromage squacquerone, oignon frit, poivrons grillés, tomates cerises, sauce BBQ',
        },
      },
      {
        name: 'Tirolese',
        price: '15,90 CHF',
        description: {
          it: 'Hamburger, speck, brie, funghi, rucola, salsa BBQ',
          en: 'Burger patty, speck, brie, mushrooms, arugula, BBQ sauce',
          de: 'Burger-Patty, Speck, Brie, Pilze, Rucola, BBQ-Sauce',
          fr: 'Steak haché, speck, brie, champignons, roquette, sauce BBQ',
        },
      },
      {
        name: 'American Burger',
        price: '15,00 CHF',
        description: {
          it: 'Hamburger, bacon, fontina, cipolla fritta, pomodori, salsa burger',
          en: 'Burger patty, bacon, fontina cheese, fried onion, tomatoes, burger sauce',
          de: 'Burger-Patty, Bacon, Fontina-Käse, frittierte Zwiebel, Tomaten, Burger-Sauce',
          fr: 'Steak haché, bacon, fromage fontina, oignon frit, tomates, sauce burger',
        },
      },
    ],
  },
  {
    title: {
      it: 'LE SPECIALI',
      en: 'THE SPECIALS',
      de: 'DIE SPEZIALITÄTEN',
      fr: 'LES SPÉCIALES',
    },
    items: [
      {
        name: 'Marinella',
        price: '13,00 CHF',
        description: {
          it: 'Tonno, squacquerò, scamorza, zucchine grigliate',
          en: 'Tuna, squacquerone cheese, scamorza, grilled zucchini',
          de: 'Thunfisch, Squacquerone-Käse, Scamorza, gegrillte Zucchini',
          fr: 'Thon, fromage squacquerone, scamorza, courgettes grillées',
        },
      },
      {
        name: 'Boscaiola',
        price: '13,00 CHF',
        description: {
          it: 'Tacchino, squacquerò, funghi, origano',
          en: 'Turkey, squacquerone cheese, mushrooms, oregano',
          de: 'Truthahn, Squacquerone-Käse, Pilze, Oregano',
          fr: 'Dinde, fromage squacquerone, champignons, origan',
        },
      },
      {
        name: 'Crudo e Brie',
        price: '13,00 CHF',
        description: {
          it: 'Crudo, brie, rucola',
          en: 'Prosciutto crudo, brie, arugula',
          de: 'Rohschinken, Brie, Rucola',
          fr: 'Jambon cru, brie, roquette',
        },
      },
      {
        name: 'Praga',
        price: '12,00 CHF',
        description: {
          it: 'Praga, scamorza, rucola',
          en: 'Prague ham, scamorza, arugula',
          de: 'Prager Schinken, Scamorza, Rucola',
          fr: 'Jambon de Prague, scamorza, roquette',
        },
      },
      {
        name: 'Delicata',
        price: '12,00 CHF',
        description: {
          it: 'Cotto, gorgonzola, mele',
          en: 'Cooked ham, gorgonzola, apples',
          de: 'Gekochter Schinken, Gorgonzola, Äpfel',
          fr: 'Jambon cuit, gorgonzola, pommes',
        },
      },
      {
        name: 'La Sfiziosa',
        price: '12,00 CHF',
        description: {
          it: 'Crudo, caprino, zucchine grigliate, pepe, olio evo',
          en: 'Prosciutto crudo, goat cheese, grilled zucchini, pepper, extra virgin olive oil',
          de: 'Rohschinken, Ziegenkäse, gegrillte Zucchini, Pfeffer, natives Olivenöl extra',
          fr: 'Jambon cru, fromage de chèvre, courgettes grillées, poivre, huile d\'olive extra vierge',
        },
      },
      {
        name: 'La Porchetta',
        price: '13,90 CHF',
        description: {
          it: 'Porchetta, fontina, insalata, maionese',
          en: 'Porchetta, fontina cheese, lettuce, mayonnaise',
          de: 'Porchetta, Fontina-Käse, Salat, Mayonnaise',
          fr: 'Porchetta, fromage fontina, salade, mayonnaise',
        },
      },
      {
        name: 'Tacchino',
        price: '12,00 CHF',
        description: {
          it: 'Tacchino, insalata, pomodori, salsa tonnata',
          en: 'Turkey, lettuce, tomatoes, tuna sauce',
          de: 'Truthahn, Salat, Tomaten, Thunfischsauce',
          fr: 'Dinde, salade, tomates, sauce au thon',
        },
      },
      {
        name: 'Bresaola',
        price: '13,00 CHF',
        description: {
          it: 'Bresaola, grana, rucola, olio evo',
          en: 'Bresaola, parmesan, arugula, extra virgin olive oil',
          de: 'Bresaola, Parmesan, Rucola, natives Olivenöl extra',
          fr: 'Bresaola, parmesan, roquette, huile d\'olive extra vierge',
        },
      },
      {
        name: 'Italy',
        price: '13,50 CHF',
        description: {
          it: 'Crudo, mozzarella di bufala, basilico, pomodorini, olio evo',
          en: 'Prosciutto crudo, buffalo mozzarella, basil, cherry tomatoes, extra virgin olive oil',
          de: 'Rohschinken, Büffelmozzarella, Basilikum, Kirschtomaten, natives Olivenöl extra',
          fr: 'Jambon cru, mozzarella de bufflonne, basilic, tomates cerises, huile d\'olive extra vierge',
        },
      },
      {
        name: 'La Superba',
        price: '14,90 CHF',
        description: {
          it: 'Bresaola, squacquerò, grana, rucola, pomodorini, glassa di aceto balsamico',
          en: 'Bresaola, squacquerone cheese, parmesan, arugula, cherry tomatoes, balsamic glaze',
          de: 'Bresaola, Squacquerone-Käse, Parmesan, Rucola, Kirschtomaten, Balsamico-Glasur',
          fr: 'Bresaola, fromage squacquerone, parmesan, roquette, tomates cerises, glaçage balsamique',
        },
      },
    ],
  },
  {
    title: {
      it: 'LE CLASSICHE',
      en: 'THE CLASSICS',
      de: 'DIE KLASSIKER',
      fr: 'LES CLASSIQUES',
    },
    items: [
      {
        name: 'Crudo',
        price: '12,00 CHF',
        description: {
          it: 'Crudo, squacquerò, rucola',
          en: 'Prosciutto crudo, squacquerone cheese, arugula',
          de: 'Rohschinken, Squacquerone-Käse, Rucola',
          fr: 'Jambon cru, fromage squacquerone, roquette',
        },
      },
      {
        name: 'Cotto',
        price: '11,00 CHF',
        description: {
          it: 'Cotto, squacquerò, rucola',
          en: 'Cooked ham, squacquerone cheese, arugula',
          de: 'Gekochter Schinken, Squacquerone-Käse, Rucola',
          fr: 'Jambon cuit, fromage squacquerone, roquette',
        },
      },
      {
        name: 'Speck',
        price: '12,90 CHF',
        description: {
          it: 'Speck, squacquerò, rucola',
          en: 'Speck, squacquerone cheese, arugula',
          de: 'Speck, Squacquerone-Käse, Rucola',
          fr: 'Speck, fromage squacquerone, roquette',
        },
      },
      {
        name: 'Salame',
        price: '11,00 CHF',
        description: {
          it: 'Salame, squacquerò, rucola',
          en: 'Salami, squacquerone cheese, arugula',
          de: 'Salami, Squacquerone-Käse, Rucola',
          fr: 'Salami, fromage squacquerone, roquette',
        },
      },
      {
        name: 'Salame Piccante',
        price: '11,00 CHF',
        description: {
          it: 'Salame piccante, squacquerò, rucola',
          en: 'Spicy salami, squacquerone cheese, arugula',
          de: 'Scharfe Salami, Squacquerone-Käse, Rucola',
          fr: 'Salami piquant, fromage squacquerone, roquette',
        },
      },
      {
        name: 'Amabile',
        price: '11,00 CHF',
        description: {
          it: 'Cotto, brie, patè di olive',
          en: 'Cooked ham, brie, olive pâté',
          de: 'Gekochter Schinken, Brie, Olivenpaste',
          fr: 'Jambon cuit, brie, pâté d\'olives',
        },
      },
      {
        name: 'Speck e Zola',
        price: '12,50 CHF',
        description: {
          it: 'Speck, squacquerò, gorgonzola',
          en: 'Speck, squacquerone cheese, gorgonzola',
          de: 'Speck, Squacquerone-Käse, Gorgonzola',
          fr: 'Speck, fromage squacquerone, gorgonzola',
        },
      },
      {
        name: 'Prosciutto e Funghi',
        price: '12,00 CHF',
        description: {
          it: 'Cotto, squacquerò, funghi, origano',
          en: 'Cooked ham, squacquerone cheese, mushrooms, oregano',
          de: 'Gekochter Schinken, Squacquerone-Käse, Pilze, Oregano',
          fr: 'Jambon cuit, fromage squacquerone, champignons, origan',
        },
      },
      {
        name: 'Autunno',
        price: '12,00 CHF',
        description: {
          it: 'Cotto, mozzarella, funghi',
          en: 'Cooked ham, mozzarella, mushrooms',
          de: 'Gekochter Schinken, Mozzarella, Pilze',
          fr: 'Jambon cuit, mozzarella, champignons',
        },
      },
    ],
  },
  {
    title: {
      it: 'LE VEGANE',
      en: 'THE VEGAN',
      de: 'DIE VEGANEN',
      fr: 'LES VÉGANES',
    },
    items: [
      {
        name: 'La Hungry',
        price: '14,00 CHF',
        description: {
          it: 'Hamburger vegano, insalata, pomodori, cipolla, salsa BBQ',
          en: 'Vegan burger, lettuce, tomatoes, onion, BBQ sauce',
          de: 'Veganer Burger, Salat, Tomaten, Zwiebel, BBQ-Sauce',
          fr: 'Burger végan, salade, tomates, oignon, sauce BBQ',
        },
      },
      {
        name: 'La Dorina',
        price: '11,00 CHF',
        description: {
          it: 'Pomodori secchi sott\'olio, pinoli, asparagi, zucchine grigliate',
          en: 'Sun-dried tomatoes in oil, pine nuts, asparagus, grilled zucchini',
          de: 'Getrocknete Tomaten in Öl, Pinienkerne, Spargel, gegrillte Zucchini',
          fr: 'Tomates séchées à l\'huile, pignons, asperges, courgettes grillées',
        },
      },
    ],
  },
  {
    title: {
      it: 'LE VEGETARIANE',
      en: 'THE VEGETARIAN',
      de: 'DIE VEGETARISCHEN',
      fr: 'LES VÉGÉTARIENNES',
    },
    items: [
      {
        name: 'Squacquerò e Rucola',
        price: '10,90 CHF',
        description: {
          it: 'Squacquerò, rucola',
          en: 'Squacquerone cheese, arugula',
          de: 'Squacquerone-Käse, Rucola',
          fr: 'Fromage squacquerone, roquette',
        },
      },
      {
        name: 'Estiva',
        price: '11,50 CHF',
        description: {
          it: 'Mozzarella, pomodori, basilico',
          en: 'Mozzarella, tomatoes, basil',
          de: 'Mozzarella, Tomaten, Basilikum',
          fr: 'Mozzarella, tomates, basilic',
        },
      },
      {
        name: 'Fior di Piadina',
        price: '13,00 CHF',
        description: {
          it: 'Mozzarella di bufala, basilico, pomodorini, olio',
          en: 'Buffalo mozzarella, basil, cherry tomatoes, oil',
          de: 'Büffelmozzarella, Basilikum, Kirschtomaten, Öl',
          fr: 'Mozzarella de bufflonne, basilic, tomates cerises, huile',
        },
      },
      {
        name: 'Vegetariana',
        price: '11,00 CHF',
        description: {
          it: 'Squacquerò, mozzarella, rucola, pomodori, origano',
          en: 'Squacquerone cheese, mozzarella, arugula, tomatoes, oregano',
          de: 'Squacquerone-Käse, Mozzarella, Rucola, Tomaten, Oregano',
          fr: 'Fromage squacquerone, mozzarella, roquette, tomates, origan',
        },
      },
      {
        name: 'Ortolana',
        price: '11,90 CHF',
        description: {
          it: 'Squacquerò, melanzane, peperoni, zucchine grigliate',
          en: 'Squacquerone cheese, eggplant, peppers, grilled zucchini',
          de: 'Squacquerone-Käse, Aubergine, Paprika, gegrillte Zucchini',
          fr: 'Fromage squacquerone, aubergines, poivrons, courgettes grillées',
        },
      },
    ],
  },
  {
    title: {
      it: 'DAL MARE',
      en: 'FROM THE SEA',
      de: 'AUS DEM MEER',
      fr: 'DE LA MER',
    },
    items: [
      {
        name: 'Tonno',
        price: '13,00 CHF',
        description: {
          it: 'Tonno, squacquerò, insalata, pomodori, maionese',
          en: 'Tuna, squacquerone cheese, lettuce, tomatoes, mayonnaise',
          de: 'Thunfisch, Squacquerone-Käse, Salat, Tomaten, Mayonnaise',
          fr: 'Thon, fromage squacquerone, salade, tomates, mayonnaise',
        },
      },
      {
        name: 'Gamberetti',
        price: '12,00 CHF',
        description: {
          it: 'Gamberetti, insalata, salsa rosa',
          en: 'Shrimp, lettuce, pink sauce',
          de: 'Garnelen, Salat, Rosa Sauce',
          fr: 'Crevettes, salade, sauce rose',
        },
      },
      {
        name: 'Tonno e Uovo',
        price: '15,00 CHF',
        description: {
          it: 'Tonno, uovo sodo, squacquerò, rucola, pomodori, maionese',
          en: 'Tuna, hard-boiled egg, squacquerone cheese, arugula, tomatoes, mayonnaise',
          de: 'Thunfisch, hartgekochtes Ei, Squacquerone-Käse, Rucola, Tomaten, Mayonnaise',
          fr: 'Thon, œuf dur, fromage squacquerone, roquette, tomates, mayonnaise',
        },
      },
    ],
  },
  {
    title: {
      it: 'LO SFIZIO',
      en: 'THE TREAT',
      de: 'DIE LECKEREI',
      fr: 'LA GOURMANDISE',
    },
    items: [
      {
        name: 'Patatine Piccole',
        price: '4,90 CHF',
        description: {
          it: 'Porzione piccola di patatine fritte',
          en: 'Small portion of french fries',
          de: 'Kleine Portion Pommes frites',
          fr: 'Petite portion de frites',
        },
      },
      {
        name: 'Patatine Grandi',
        price: '6,50 CHF',
        description: {
          it: 'Porzione grande di patatine fritte',
          en: 'Large portion of french fries',
          de: 'Große Portion Pommes frites',
          fr: 'Grande portion de frites',
        },
      },
    ],
  },
  {
    title: {
      it: 'LE DOLCI',
      en: 'THE SWEETS',
      de: 'DIE SÜSSEN',
      fr: 'LES SUCRÉES',
    },
    items: [
      {
        name: 'Rotolino alla Nutella',
        price: '8,00 CHF',
        description: {
          it: 'Rotolino alla Nutella (aggiunta cocco, Smarties, granella: +1,00 CHF)',
          en: 'Nutella roll (add coconut, Smarties, sprinkles: +1,00 CHF)',
          de: 'Nutella-Rolle (Zusatz Kokos, Smarties, Streusel: +1,00 CHF)',
          fr: 'Roulé au Nutella (ajout noix de coco, Smarties, vermicelles: +1,00 CHF)',
        },
      },
    ],
  },
];
