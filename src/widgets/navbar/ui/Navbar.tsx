import { routerPath } from "shared/config/router";
import { Link } from "shared/ui/link";
import s from "./navbar.module.scss"
import { cn } from "shared/lib/class-names";

interface IProps {
    className: string;
}
export const Navbar: React.FC<IProps> = ({ className }) => {
	return (
		<div className={cn(s.navbar, className)}>
			<div className={s.links}>
				<Link className={s.link} to={routerPath.home}>to Home</Link>
				<Link className={s.link} to={routerPath.about}>to About</Link>
			</div>
		</div>
	);
}
Navbar.displayName = "Navbar"
