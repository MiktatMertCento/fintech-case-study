import * as Sentry from "@sentry/react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import "./index.css";

const sentryDsn = import.meta.env.VITE_SENTRY_DSN;
const sentryEnv = import.meta.env.VITE_SENTRY_ENV;
if (sentryDsn && sentryEnv && process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: sentryDsn,
    environment: sentryEnv,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>,
);
