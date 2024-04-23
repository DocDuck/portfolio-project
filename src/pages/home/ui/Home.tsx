import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
    const { t } = useTranslation();

    return <div>{t("Главная")}</div>
}
Home.displayName = "Home"

export default Home;