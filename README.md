# Piadineria La Caveja Lugano Viale Cattaneo - Sito Web

Sito web ufficiale della Piadineria La Caveja Lugano Viale Cattaneo.

## Informazioni del Progetto

Piadineria La Caveja porta a Lugano la vera piadina romagnola: fresca, generosa e preparata al momento.

**Indirizzo**: Viale Carlo Cattaneo 15, 6900 Lugano, Svizzera  
**Telefono**: +41 79 765 13 81

## Tecnologie Utilizzate

Questo progetto è realizzato con:

- **Vite** - Build tool e dev server
- **React** - Libreria UI
- **TypeScript** - Tipizzazione statica
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componenti UI
- **React Router** - Routing

## Installazione e Sviluppo

### Requisiti

- Node.js (versione 18 o superiore)
- npm o yarn

### Setup

1. Clona il repository:
```bash
git clone <URL_DEL_REPOSITORY>
cd la-caveja-digital
```

2. Installa le dipendenze:
```bash
npm install
```

3. Avvia il server di sviluppo:
```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:8080`

## Script Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Anteprima della build di produzione
- `npm run lint` - Esegue il linter

## Deploy

Il progetto è configurato per il deploy su **Netlify**.

### 🚀 Deploy Rapido con Netlify (2 minuti):

**Opzione 1 - Tramite GitHub (Consigliato):**
1. Pusha il codice su GitHub
2. Vai su [netlify.com](https://netlify.com) e importa il repository
3. Netlify rileva automaticamente le impostazioni - clicca "Deploy"

Il sito sarà online in 2 minuti con un link provvisorio tipo: `https://la-caveja-digital.netlify.app`

**Opzione 2 - Tramite CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

📖 **Per istruzioni dettagliate, vedi [DEPLOY.md](./DEPLOY.md)**


## Licenza

© 2025 Piadineria La Caveja Lugano Viale Cattaneo. Tutti i diritti riservati.
