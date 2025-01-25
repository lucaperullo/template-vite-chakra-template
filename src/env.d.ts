export interface ImportMetaEnv {
  VITE_API_BASE_URL: string;
  // Aggiungi qui altre variabili di ambiente se necessario
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
