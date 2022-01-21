import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextXhrBackend from "i18next-xhr-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import ko from "./kr.json";
import en from "./en.json";
import cn from "./cn.json";

i18n
  .use(I18NextXhrBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    resources: {
      ko: {
        lang: ko,
      },
      en: {
        lang: en,
      },
      cn: {
        lang: cn,
      },
    },
    ns: ["lang"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
