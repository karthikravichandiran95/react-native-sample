import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageResources from './languageResources.json';

i18next
  .use(initReactI18next)
  .init({
    resources: languageResources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;