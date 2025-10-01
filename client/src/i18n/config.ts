import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ro from './locales/ro.json';
import hu from './locales/hu.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ro: { translation: ro },
      hu: { translation: hu }
    },
    lng: 'hu',
    fallbackLng: 'hu',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
