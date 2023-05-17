import { useTranslation } from "react-i18next"
import './Header.css'
import { useState } from "react";



const Header = () => {
    const [t, i18n] = useTranslation("global");
    const [active, setActive] = useState(1)
    const handleChangeLanguage = (lang, number) => {
        setActive(number)
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <h1 className="container text-center title-lang">
                {t("header.message")} </h1>
            <div className="container text-center mt-5">
                <button className={active === 1 ? "button-lang-active" : "button-lang"} onClick={() => handleChangeLanguage("en", 1)} > English </button>
                <button className={active === 2 ? "button-lang-active" : "button-lang"} onClick={() => handleChangeLanguage("fr", 2)} > Français </button>
                <button className={active === 3 ? "button-lang-active" : "button-lang"} onClick={() => handleChangeLanguage("tr", 3)} > Türkçe </button>
            </div>
        </div>
    )
}

export default Header