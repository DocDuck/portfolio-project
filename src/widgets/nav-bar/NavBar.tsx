import { routerPath } from "shared/config/router";
import { Link } from "shared/ui/link";
import s from "./nav-bar.module.scss"

export function NavBar () {
  return (
		<div className={s.navbar}>
			<div className={s.links}>
				<Link className={s.link} to={routerPath.home}>to Home</Link>
				<Link className={s.link} to={routerPath.about}>to About</Link>
			</div>
		</div>
	);
}
