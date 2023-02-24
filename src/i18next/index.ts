import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import es from './es.json';

export const lng = 'en';
export const resources = {
  en,
  es,
} as const;

i18next.use(initReactI18next).init({
  lng: 'en',
  resources,
  react: {
    useSuspense: false,
  },
});

export default i18next;
