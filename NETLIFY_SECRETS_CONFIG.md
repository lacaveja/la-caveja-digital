# Configurazione Netlify per Google Maps API Key

## Problema
Netlify rileva la chiave API Google Maps nel build output (file JavaScript compilato). Questo è normale perché Vite inietta le variabili `VITE_*` nel bundle.

## Soluzione: Configura Variabili d'Ambiente su Netlify

Vai su **Netlify Dashboard** → **Site settings** → **Environment variables** e aggiungi queste variabili:

### 1. Disabilita la rilevazione intelligente (CONSIGLIATO)
- **Key**: `SECRETS_SCAN_SMART_DETECTION_ENABLED`
- **Value**: `false`
- **Scopes**: ✅ Production, ✅ Deploy previews, ✅ Branch deploys

### 2. Escludi la chiave specifica
- **Key**: `SECRETS_SCAN_OMIT_KEYS`
- **Value**: `VITE_GOOGLE_MAPS_API_KEY`
- **Scopes**: ✅ Production, ✅ Deploy previews, ✅ Branch deploys

### 3. Escludi la cartella dist dal scanning
- **Key**: `SECRETS_SCAN_OMIT_PATHS`
- **Value**: `dist/**`
- **Scopes**: ✅ Production, ✅ Deploy previews, ✅ Branch deploys

### 4. La tua chiave API Google Maps
- **Key**: `VITE_GOOGLE_MAPS_API_KEY`
- **Value**: `AIzaSyD1qVrcGj2LCMbSSVoQZY4QGs7-t1qIZCg`
- **Scopes**: ✅ Production, ✅ Deploy previews, ✅ Branch deploys

## Dopo aver configurato

1. Salva tutte le variabili
2. Vai su **Deploys**
3. Clicca sui tre puntini (...) → **Trigger deploy** → **Clear cache and deploy site**

## Nota Importante

Le Google Maps API keys sono progettate per essere pubbliche nel frontend. Assicurati però di:
- Limitare la chiave per dominio nel Google Cloud Console
- Configurare le restrizioni HTTP referrer per sicurezza aggiuntiva

