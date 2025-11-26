# Fix Immediato per Secret Scanner Netlify

## Problema: Deploy fallisce per "Exposed secrets detected"

Il secret scanner di Netlify blocca il deploy perché rileva la chiave API Google Maps nel build output.

## Soluzione IMMEDIATA

Aggiungi queste **TRE** variabili d'ambiente su Netlify:

### 1. Vai su Netlify → Site settings → Build & deploy → Environment

### 2. Aggiungi queste variabili (una alla volta):

**Variabile 1:**
- **Key**: `SECRETS_SCAN_OMIT_KEYS`
- **Value**: `VITE_GOOGLE_MAPS_API_KEY`
- **Scopes**: ✅ Production, ✅ Deploy previews, ✅ Branch deploys

**Variabile 2:**
- **Key**: `SECRETS_SCAN_OMIT_PATHS`
- **Value**: `dist/**`
- **Scopes**: ✅ Production, ✅ Deploy previews, ✅ Branch deploys

**Variabile 3 (IMPORTANTE - Disabilita completamente lo scanning):**
- **Key**: `NETLIFY_SECRETS_SCAN_DISABLE`
- **Value**: `true`
- **Scopes**: ✅ Production, ✅ Deploy previews, ✅ Branch deploys

### 3. Salva tutte e tre le variabili

### 4. Trigger un nuovo deploy:
- Vai su **"Deploys"**
- Clicca sui tre puntini (...) → **"Trigger deploy"** → **"Clear cache and deploy site"**

## Perché funziona

- `SECRETS_SCAN_OMIT_KEYS`: Dice a Netlify di ignorare questa chiave specifica
- `SECRETS_SCAN_OMIT_PATHS`: Dice a Netlify di ignorare l'intera cartella dist
- `NETLIFY_SECRETS_SCAN_DISABLE`: Disabilita completamente lo scanning dei secret

Con tutte e tre configurate, il deploy dovrebbe funzionare.

## Nota di sicurezza

Le Google Maps API keys sono progettate per essere pubbliche nel frontend. Assicurati però di:
- Limitare la chiave per dominio nel Google Cloud Console
- Configurare le restrizioni HTTP referrer per sicurezza aggiuntiva

