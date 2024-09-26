import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {en , ta} from "./translations"

const resources = {
    en : {
        translation : en,
    },
    fr: {
        translation: ta,
    }
}

i18next.use(initReactI18next).init({
    debug: true,
    lng: 'en',
    compatabilityJSON: 'v3',
    resources,
})

export default i18next;