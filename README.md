# Chakra UI 3.5.1 + Vite Template

This template allows you to quickly start developing applications with **Chakra UI 3.0** and **Vite**. It comes pre-configured with **TypeScript** and **PNPM** for an efficient development experience.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** version 16 or higher
- **PNPM** installed (you can install it with `npm install -g pnpm`)

## Getting Started

Follow these steps to set up the project:

### 1. Clone the Repository

```bash
git clone https://github.com/lucaperullo/template-vite-chakra-template CHOOSE-PROJECT-NAME && cd CHOOSE-PROJECT-NAME
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

## Project Structure

```plaintext
├── src/
│   ├── App.tsx
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   ├── theme/           # Theme customization
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts
├── public/               # Static assets
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json    # TypeScript configuration for Node
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── package.json          # Project metadata and dependencies
├── pnpm-lock.yaml        # PNPM lock file
└── README.md             # You are reading it. :)
```

## Comandi utili

- **Starts development server:**

  ```bash
  pnpm dev
  ```

- **Builds the project:**

  ```bash
  pnpm build
  ```

- **Serve the build in local:**

  ```bash
  pnpm preview
  ```

- **Linting:**
  ```bash
  pnpm lint
  ```

## 🤝 Contribution Guide

### 1. Clone the repository

### 2. Create your feature branch (git checkout -b feat/amazing-feature)

### 3. Commit changes (git commit -m 'Add amazing feature')

### 4. Push to branch (git push origin feat/amazing-feature)

### 5. Open a Pull Request

**Happy coding! 🚀**
