import i18next from "i18next";
import global_en from '../translations/en/global.json'
import global_fr from '../translations/fr/global.json'
import global_tr from '../translations/tr/global.json'


i18next.init(
    {
        interpolation: { escapeValue: false },
        lng: "en",
        resources: {
            en: {
                global: global_en
            },
            fr: {
                global: global_fr
            },
            tr: {
                global: global_tr
            }
        }
    }
)