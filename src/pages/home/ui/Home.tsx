import { Counter } from "entities/counter";
import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<div>
			{t("Главная")}
			<Counter />
		</div>
	);
};
Home.displayName = "Home";

export default Home;