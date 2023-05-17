import { useTranslation } from "react-i18next";
import './Body.css'

function Body() {

    const [t] = useTranslation("global");
    return (
        <div>
            <p className="body-design container ">
                {t("home.body")}
            </p>
        </div>
    )
}

export default Body