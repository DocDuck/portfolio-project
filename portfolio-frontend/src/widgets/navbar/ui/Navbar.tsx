import { cn } from "shared/lib/classNames";
import s from "./navbar.module.scss";

interface IProps {
  className?: string;
}
export const Navbar: React.FC<IProps> = ({ className = "" }) => {
	return (
		<div className={cn(s.navbar, {[className]: !!className})}>
		</div>
	);
};
Navbar.displayName = "Navbar";
