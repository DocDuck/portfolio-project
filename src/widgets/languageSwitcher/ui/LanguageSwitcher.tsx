import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button";

export const LanguageSwitcher: React.FC = () => {
	const { t, i18n } = useTranslation();
	const onChangeLanguage = async () => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	return (
		<Button onClick={() => {
			onChangeLanguage().catch(console.error);
		}}>
			{t("Язык")}
		</Button>
	);
};

LanguageSwitcher.displayName = "LanguageSwitcher";