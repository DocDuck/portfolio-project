import { Link as L, LinkProps } from "react-router-dom";
import { cn } from "shared/lib/class-names";
import { Route, RouterPath } from "shared/config/router";
import s from "./link.module.scss";

interface ILinkProps extends LinkProps {
    to: RouterPath[Route];
    children?: React.ReactNode;
    className?: string;
}

export const Link: React.FC<ILinkProps> = (props) => {
	const { to, className = "", children, ...rest } = props;  
	return <L to={to} className={cn(s.link, { [className]: !!className })} {...rest}>{ children }</L>;
};
