import { useTranslation } from "react-i18next";
import { cn } from "shared/lib/classNames";
import { Button } from "shared/ui/button";

interface IProps {
	className?: string;
	isShort?: boolean
}

export const LanguageSwitcher: React.FC<IProps> = (props) => {
	const { className = "", isShort = false } = props;
	const { t, i18n } = useTranslation();
	const onChangeLanguage = async () => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	return (
		<Button
			className={cn({ [className]: !!className })}
			onClick={() => {
				onChangeLanguage().catch(console.error);
			}}
		>
			{t(isShort ? "Язык сокращенный" : "Язык")}
		</Button>
	);
};

LanguageSwitcher.displayName = "LanguageSwitcher";