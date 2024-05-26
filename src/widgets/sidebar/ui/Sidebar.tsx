import { cn } from "shared/lib/classNames";
import s from "./sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/themeSwitcher/ui";
import { LanguageSwitcher } from "widgets/languageSwitcher/ui";

interface IProps {
  className?: string;
}
export const Sidebar: React.FC<IProps> = ({ className }) => {
	const [colapsed, setColapsed] = useState(false);

	return (
		<aside data-testid="sidebar" className={cn(s.sidebar, { [s.colapsed]: colapsed }, className)}>
			<div
				data-testid="sidebar-toggle-btn"
				className={s.toggler}
				onClick={() => setColapsed(colapsed => !colapsed)}
			>
				{colapsed ? '>' : '<'}
			</div>
			<div className={s.controls}>
				<ThemeSwitcher className={s.themeSwitcher} />
				<LanguageSwitcher />
			</div>
		</aside>
	);
};
Sidebar.displayName = 'Sidebar';