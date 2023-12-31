import i18nextBackend from "i18next-fs-backend";
import { resolve } from "node:path";
import { RemixI18Next } from "remix-i18next";

import i18n from "~/i18n"; // main i18n configuration file
import { i18nCookie } from "./cookies";

const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
    cookie: i18nCookie
  },
  i18next: {
    ...i18n,
    backend: {

      loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
    },
  },
  // The backend you want to use to load the translations
  // Tip: You could pass `resources` to the `i18next` configuration and avoid
  // a backend here
  backend: i18nextBackend,
});

export default i18next;