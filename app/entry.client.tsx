import { RemixBrowser } from "@remix-run/react";
import i18next from "i18next";
import i18nextLanguageDetector from "i18next-browser-languagedetector";
import i18nextBackend from "i18next-http-backend";
import { hydrateRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { getInitialNamespaces } from "remix-i18next";

import i18n from "./i18n"; // main i18n configuration file

i18next
  .use(initReactI18next) // Tell i18next to use the react-i18next plugin
  .use(i18nextLanguageDetector) // Setup a client-side language detector
  .use(i18nextBackend) // Setup your backend
  .init({
    ...i18n,
    ns: getInitialNamespaces(),
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["htmlTag"],
      caches: [],
    },
  })
  .then(() => {
    return hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <RemixBrowser />
      </I18nextProvider>
    );
  });
