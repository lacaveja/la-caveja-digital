# Guida al Deploy - Link Provvisorio Online

Questo progetto è configurato per essere deployato facilmente su **Netlify**.

## 🚀 Opzione 1: Netlify (CONSIGLIATO - 2 minuti) - Login solo con GitHub, no SMS!

### Metodo A: Deploy tramite GitHub (Automatico, SENZA SMS)

1. **Vai su [netlify.com](https://netlify.com)** e crea un account gratuito
   - Clicca "Sign up" → **"Continue with GitHub"**
   - Autorizza Netlify ad accedere ai tuoi repository
   - **Nessun SMS richiesto!** ✅

2. **Nella dashboard, clicca "Add new site" → "Import an existing project"**

3. **Seleziona "GitHub"** e autorizza se necessario

4. **Scegli il repository:** `lacaveja/la-caveja-digital`

5. **Netlify rileverà automaticamente:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - **Tutto già configurato nel file `netlify.toml`!** ✅

6. **Clicca "Deploy site"**

7. **Fatto!** Il tuo sito sarà online in ~2 minuti con un link tipo: `https://la-caveja-digital.netlify.app`

### ✅ Vantaggi di Netlify:
- ✅ Login solo con GitHub (NO SMS richiesto!)
- ✅ Gratuito per progetti personali
- ✅ Link provvisorio in 2 minuti
- ✅ Deploy automatico ad ogni push su GitHub
- ✅ HTTPS automatico
- ✅ CDN globale incluso
- ✅ Preview deployments per ogni commit

---

## 🌐 Opzione 2: Netlify (Metodo Drag & Drop - Senza login GitHub)

### Metodo A: Drag & Drop (Il più veloce senza login!)

1. **Prima, fai il build locale:**
   ```bash
   npm run build
   ```

2. **Vai su [netlify.com](https://netlify.com)** e crea un account gratuito
   - Puoi registrarti con solo email (NON richiede SMS!)

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

3. **Segui le istruzioni per fare login** (solo email, NO SMS)

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

4. **Quando il sito è online, aggiorna gli URL nel `sitemap.xml` e `robots.txt`:**
   - Cambia `https://lacaveja.ch` con l'URL effettivo che riceverai (es. `https://la-caveja-digital.netlify.app`)
   - Oppure, quando avrai il dominio finale, usa quello

### Dopo il deploy:

- Il link provvisorio sarà disponibile immediatamente
- Se usi GitHub + Netlify, ogni push farà un nuovo deploy automatico
- Puoi aggiungere un dominio personalizzato in seguito nelle impostazioni del progetto

---

---

## ⚡ Opzione 3: Surge.sh (IL PIÙ VELOCE - 30 secondi, NO SMS!)

Surge è estremamente semplice e veloce. **Non richiede SMS o login complessi!**

### Passi:

1. **Installa Surge:**
   ```bash
   npm install -g surge
   ```

2. **Fai il build del progetto:**
   ```bash
   npm run build
   ```

3. **Deploy con Surge:**
   ```bash
   cd dist
   surge
   ```

4. **Segui le istruzioni:**
   - Se è la prima volta, ti chiederà di creare un account (solo email, NO SMS!)
   - Ti chiederà un dominio: puoi usare `la-caveja-digital.surge.sh` o lasciare che generi uno casuale
   - Premi Invio per confermare

5. **Fatto!** Il tuo sito sarà online immediatamente su `https://la-caveja-digital.surge.sh`

### ✅ Vantaggi di Surge:
- ✅ **Nessun SMS richiesto!** Solo email
- ✅ Deploy in 30 secondi
- ✅ Comando semplice: `surge`
- ✅ HTTPS automatico
- ✅ Gratuito
- ⚠️ Domini tipo `*.surge.sh` (non puoi personalizzare troppo)

---

## 🎯 Quale scegliere?

- **Netlify**: Se vuoi deploy automatico da GitHub, NO SMS! (CONSIGLIATO)
- **Surge.sh**: Se vuoi il metodo più veloce possibile, senza complessità (30 secondi)

**Entrambe sono gratuite e offrono link provvisori immediati!**

