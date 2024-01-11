
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'am',
    resources: {
        en: {
            translations:require('./locales/en/translations.json')
        },
        am: {
            translations:require('./locales/am/translations.json')
        },
        or: {
            translations:require('./locales/or/translations.json')
        },
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'am', 'or'];

export default i18n;