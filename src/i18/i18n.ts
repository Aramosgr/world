import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import translationSpa from './locales/spanish.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    //debug: (process.env.NODE_ENV || 'development') === 'development',
    debug: false,
    lng: 'es',
    fallbackLng: 'es', // use fallback if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    resources: {
      es: {
        translations: translationSpa
      }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    react: {
      useSuspense: false
    }
  });

export default i18n;
