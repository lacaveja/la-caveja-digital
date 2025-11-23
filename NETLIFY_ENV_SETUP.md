# Configurazione Variabili d'Ambiente su Netlify

## Problema: La mappa non funziona in produzione

Se la mappa funziona in locale ma non su Netlify, significa che la variabile d'ambiente `VITE_GOOGLE_MAPS_API_KEY` non è configurata.

## Soluzione: Configurare la variabile d'ambiente su Netlify

### Passo 1: Accedi a Netlify
1. Vai su [app.netlify.com](https://app.netlify.com)
2. Accedi al tuo account
3. Seleziona il sito "la-caveja-digital" (o il nome del tuo sito)

### Passo 2: Configura le variabili d'ambiente
1. Vai su **"Site settings"** (Impostazioni del sito)
2. Scorri fino a **"Environment variables"** (Variabili d'ambiente)
3. Clicca su **"Add a variable"** (Aggiungi una variabile)

### Passo 3: Aggiungi la chiave API
1. **Key (Chiave)**: `VITE_GOOGLE_MAPS_API_KEY`
2. **Value (Valore)**: Inserisci la tua Google Maps API key: `AIzaSyCjO9MkduRfoV-IS72MRaE9jajqf1SuJN0`
3. **Scopes (Ambiti)**: Seleziona tutti e tre:
   - ✅ **Production**
   - ✅ **Deploy previews**
   - ✅ **Branch deploys**
4. Clicca su **"Save"** (Salva)

### Passo 4: Riavvia il deploy
1. Vai su **"Deploys"** (Deploy)
2. Clicca sui tre puntini (...) accanto all'ultimo deploy
3. Seleziona **"Trigger deploy"** → **"Clear cache and deploy site"** (Cancella cache e deploy del sito)

### Passo 5: Verifica
Dopo il nuovo deploy, la mappa dovrebbe funzionare correttamente.

## Verifica che la variabile sia configurata

Puoi verificare che la variabile sia configurata correttamente:
1. Vai su **"Site settings"** → **"Environment variables"**
2. Dovresti vedere `VITE_GOOGLE_MAPS_API_KEY` nella lista
3. Assicurati che sia selezionata per tutti gli ambienti

## Nota importante

- Le variabili d'ambiente devono iniziare con `VITE_` per essere accessibili nel codice frontend con Vite
- Dopo aver aggiunto/modificato una variabile d'ambiente, è necessario fare un nuovo deploy
- La variabile è sensibile e non dovrebbe essere committata nel repository (è già nel `.gitignore`)

