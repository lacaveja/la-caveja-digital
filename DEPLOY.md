# Guida al Deploy - Link Provvisorio Online

Questo progetto è configurato per essere deployato facilmente su **Vercel** (raccomandato) o **Netlify**.

## 🚀 Opzione 1: Vercel (CONSIGLIATO - 2 minuti)

### Metodo A: Deploy tramite GitHub (Automatico)

1. **Crea un repository su GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <URL_DEL_TUO_REPOSITORY_GITHUB>
   git push -u origin main
   ```

2. **Vai su [vercel.com](https://vercel.com)** e crea un account gratuito (puoi usare GitHub)

3. **Clicca su "Add New Project"** → Seleziona il tuo repository

4. **Vercel rileva automaticamente le impostazioni**, quindi clicca semplicemente su **"Deploy"**

5. **Fatto!** Il tuo sito sarà online in ~2 minuti con un link tipo: `https://la-caveja-digital-abc123.vercel.app`

### Metodo B: Deploy tramite Vercel CLI (Più veloce, senza GitHub)

1. **Installa Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Nel progetto, esegui:**
   ```bash
   vercel
   ```

3. **Segui le istruzioni:**
   - Se è la prima volta, ti chiederà di fare login
   - Conferma le impostazioni (già configurate nel file `vercel.json`)
   - Premi Invio per accettare

4. **Fatto!** Otterrai un link provvisorio immediato

### ✅ Vantaggi di Vercel:
- ✅ Gratuito per progetti personali
- ✅ Link provvisorio in 2 minuti
- ✅ Deploy automatico ad ogni push su GitHub (se usi Metodo A)
- ✅ HTTPS automatico
- ✅ CDN globale incluso
- ✅ Preview deployments per ogni commit

---

## 🌐 Opzione 2: Netlify

### Metodo A: Drag & Drop (Il più veloce!)

1. **Prima, fai il build locale:**
   ```bash
   npm run build
   ```

2. **Vai su [netlify.com](https://netlify.com)** e crea un account gratuito

3. **Nella dashboard, trova "Sites" → "Add new site" → "Deploy manually"**

4. **Trascina la cartella `dist`** (generata dal build) nella pagina

5. **Fatto!** Il tuo sito sarà online con un link tipo: `https://random-name-123456.netlify.app`

### Metodo B: Netlify CLI

1. **Installa Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Nel progetto, esegui:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

3. **Segui le istruzioni per fare login**

4. **Fatto!**

---

## 📝 Note Importanti

### Prima di fare il deploy:

1. **Assicurati che il build funzioni:**
   ```bash
   npm run build
   ```
   Se ci sono errori, risolvili prima del deploy.

2. **Verifica che tutte le immagini siano nella cartella `public/`** (sono già lì ✅)

3. **Quando il sito è online, aggiorna gli URL nel `sitemap.xml` e `robots.txt`:**
   - Cambia `https://lacaveja.ch` con l'URL effettivo che riceverai (es. `https://la-caveja-digital.vercel.app`)
   - Oppure, quando avrai il dominio finale, usa quello

### Dopo il deploy:

- Il link provvisorio sarà disponibile immediatamente
- Se usi GitHub + Vercel, ogni push farà un nuovo deploy automatico
- Puoi aggiungere un dominio personalizzato in seguito nelle impostazioni del progetto

---

## 🎯 Quale scegliere?

- **Vercel**: Se vuoi il metodo più veloce e automatizzato (CONSIGLIATO)
- **Netlify**: Se preferisci una alternativa altrettanto valida

**Entrambe sono gratuite e offrono link provvisori immediati!**

