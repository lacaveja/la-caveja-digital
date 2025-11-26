# Configurazione DNS e Certificato SSL su Netlify

## Problema: Certificato SSL non può essere fornito

Netlify non può fornire un certificato Let's Encrypt se i record DNS del tuo dominio personalizzato non puntano ai server di Netlify.

## Soluzione: Configurare i DNS

### Passo 1: Ottieni gli indirizzi Netlify

1. Vai su [app.netlify.com](https://app.netlify.com) → il tuo sito
2. Vai su **"Domain settings"** (Impostazioni dominio)
3. Se hai già aggiunto un dominio personalizzato, vedrai gli indirizzi da usare:
   - **Per un dominio principale** (es. `lacaveja.ch`): usa un record **A** o **ALIAS**
   - **Per un sottodominio** (es. `www.lacaveja.ch`): usa un record **CNAME**

### Passo 2: Configura i DNS nel tuo provider

Vai al pannello di controllo del tuo provider DNS (es. il registrar del dominio o un servizio DNS come Cloudflare, Google Domains, ecc.)

#### Opzione A: Dominio principale (es. `lacaveja.ch`)

Aggiungi un record **A** o **ALIAS**:
- **Tipo**: A o ALIAS
- **Nome/Host**: `@` o lascia vuoto (per il dominio principale)
- **Valore/Indirizzo**: Usa l'indirizzo IP fornito da Netlify (solitamente qualcosa come `75.2.60.5`)
- **TTL**: 3600 (o default)

**Oppure** usa un record **CNAME** se il tuo provider lo supporta:
- **Tipo**: CNAME
- **Nome/Host**: `@` o lascia vuoto
- **Valore**: `[nome-sito].netlify.app` (es. `la-caveja-digital.netlify.app`)

#### Opzione B: Sottodominio (es. `www.lacaveja.ch`)

Aggiungi un record **CNAME**:
- **Tipo**: CNAME
- **Nome/Host**: `www`
- **Valore**: `[nome-sito].netlify.app` (es. `la-caveja-digital.netlify.app`)
- **TTL**: 3600 (o default)

### Passo 3: Verifica la configurazione DNS

1. Torna su Netlify → **"Domain settings"**
2. Clicca su **"Verify DNS configuration"**
3. Netlify verificherà se i DNS sono configurati correttamente

**Tempi di propagazione DNS:**
- I cambiamenti DNS possono richiedere da pochi minuti a 48 ore per propagarsi
- Solitamente richiede 1-24 ore

### Passo 4: Attendi la propagazione e verifica

1. Dopo aver configurato i DNS, attendi almeno 1 ora
2. Verifica che i DNS siano propagati usando strumenti online:
   - [whatsmydns.net](https://www.whatsmydns.net)
   - [dnschecker.org](https://dnschecker.org)
3. Inserisci il tuo dominio e verifica che punti agli indirizzi di Netlify

### Passo 5: Netlify fornirà automaticamente il certificato

Una volta che i DNS sono configurati correttamente e propagati:
1. Netlify rileverà automaticamente la configurazione
2. Inizierà il processo di validazione del dominio
3. Fornirà automaticamente un certificato SSL/TLS Let's Encrypt
4. Il certificato sarà attivo in pochi minuti

## Risoluzione problemi

### Se i DNS non si propagano dopo 24 ore:
- Verifica di aver inserito correttamente i valori
- Controlla che non ci siano altri record DNS in conflitto
- Contatta il supporto del tuo provider DNS

### Se Netlify non rileva ancora i DNS:
- Usa lo strumento "Verify DNS configuration" su Netlify
- Assicurati che i record DNS siano esattamente come indicato da Netlify
- Verifica che non ci siano record DNS obsoleti o in conflitto

### Se vuoi usare il tuo certificato:
- Clicca su **"Provide your own certificate"**
- Carica il tuo certificato SSL e la chiave privata
- Netlify lo userà invece di Let's Encrypt

## Note importanti

- **Non rimuovere** i record DNS esistenti finché non sei sicuro che i nuovi funzionino
- Il certificato SSL sarà **rinnovato automaticamente** da Netlify
- Una volta configurato, il sito sarà accessibile sia via HTTP che HTTPS

