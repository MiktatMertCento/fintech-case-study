/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: "development" | "production";
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_SENTRY_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
