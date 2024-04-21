import { ThemeSwitcher } from "widgets/theme-switcher/ui";
import { routerPath } from "shared/config/router";
import { Link } from "shared/ui/link";
import s from "./navbar.module.scss"

export const Navbar: React.FC = () => {
	return (
		<div className={s.navbar}>
			<ThemeSwitcher className={s.switcher} />
			<div className={s.links}>
				<Link className={s.link} to={routerPath.home}>to Home</Link>
				<Link className={s.link} to={routerPath.about}>to About</Link>
			</div>
		</div>
	);
}
Navbar.displayName = "Navbar"
