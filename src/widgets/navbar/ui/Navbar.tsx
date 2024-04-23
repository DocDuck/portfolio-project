import { useTranslation } from "react-i18next";
import { routerPath } from "shared/config/router";
import { Link } from "shared/ui/link";
import s from "./navbar.module.scss"
import { cn } from "shared/lib/class-names";

interface IProps {
    className: string;
}
export const Navbar: React.FC<IProps> = ({ className }) => {
	const { t } = useTranslation();
	return (
		<div className={cn(s.navbar, className)}>
			<div className={s.links}>
				<Link className={s.link} to={routerPath.home}>{t("На главную")}</Link>
				<Link className={s.link} to={routerPath.about}>{t("На страницу О сайте")}</Link>
			</div>
		</div>
	);
}
Navbar.displayName = "Navbar"
