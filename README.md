# Chakra UI 3.0 + Vite Template

Questo template ti permette di iniziare rapidamente a sviluppare applicazioni con **Chakra UI 3.0** e **Vite**. È già preconfigurato per TypeScript e PNPM.

## Prerequisiti

Prima di iniziare, assicurati di avere:

- **Node.js** versione 16 o successiva
- **PNPM** installato (puoi installarlo con `npm install -g pnpm`)

## Come iniziare

1. **Clona il repository**

   ```bash
   git clone <URL_DEL_REPOSITORY>
   cd <NOME_CARTELLA_REPOSITORY>
   ```

2. **Installa le dipendenze**

   ```bash
   pnpm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   pnpm dev
   ```
   Apri il browser su `http://localhost:3000` per visualizzare l'applicazione.

## Struttura del progetto

- `src/`: Contiene il codice sorgente dell'app.
- `public/`: Contiene asset statici.
- `index.html`: Entry point dell'app.
- `vite.config.ts`: Configurazione di Vite.

## Chakra UI

Questo template include **Chakra UI 3.0**, una libreria di componenti React. Puoi personalizzare il tema seguendo questi passi:

1. **Modifica il file del tema:**
   Puoi personalizzare il tema modificando o creando un file tema in `src/theme` (esempio: `theme.ts`).

2. **Usa i componenti Chakra UI:**
   Importa e utilizza i componenti Chakra nei tuoi file React. Esempio:

   ```tsx
   import { Button } from "@chakra-ui/react";

   function App() {
     return <Button colorScheme="blue">Cliccami</Button>;
   }

   export default App;
   ```

## Comandi utili

- **Avvia il server di sviluppo:**

  ```bash
  pnpm dev
  ```

- **Build del progetto:**

  ```bash
  pnpm build
  ```

- **Serve la build in locale:**

  ```bash
  pnpm preview
  ```

- **Linting:**
  ```bash
  pnpm lint
  ```

## Contribuire

Se vuoi contribuire al progetto, crea un fork e apri una pull request con le tue modifiche.

---

**Buon coding! 🚀**
