import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation }, 
            ar: { translation: arTranslation }
        },
        lng: "en",
        fallbackLng: "en", // اللغة الاحتياطية
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
