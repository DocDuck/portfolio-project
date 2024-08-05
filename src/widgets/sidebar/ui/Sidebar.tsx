import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "widgets/languageSwitcher/ui";
import { ThemeSwitcher } from "widgets/themeSwitcher/ui";
import { cn } from "shared/lib/classNames";
import { routerPath } from "shared/config/router";
import { Link } from "shared/ui/link";
import AboutIcon from "shared/assets/icons/aboutPage.svg";
import HomeIcon from "shared/assets/icons/homePage.svg";
import s from "./sidebar.module.scss";

interface IProps {
  className?: string;
}
export const Sidebar: React.FC<IProps> = ({ className }) => {
	const [colapsed, setColapsed] = useState(false);
	const { t } = useTranslation();

	return (
		<aside data-testid="sidebar" className={cn(s.sidebar, { [s.colapsed]: colapsed }, className)}>
			<div
				data-testid="sidebar-toggle-btn"
				className={s.toggler}
				onClick={() => setColapsed(colapsed => !colapsed)}
			>
				{colapsed ? '>' : '<'}
			</div>
			<div className={s.links}>
				<Link className={s.link} to={routerPath.home}>
					<HomeIcon className={s.icon} />
					{!colapsed && t("На главную")}
				</Link>
				<Link className={s.link} to={routerPath.about}>
					<AboutIcon className={s.icon} />
					{!colapsed && t("О сайте")}
				</Link>
			</div>
			<div className={s.controls}>
				<ThemeSwitcher className={s.themeSwitcher} />
				<LanguageSwitcher isShort={colapsed} />
			</div>
		</aside>
	);
};
Sidebar.displayName = 'Sidebar';