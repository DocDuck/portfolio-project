import { cn } from "shared/lib/classNames";
import { useTheme } from "shared/theme";
import { Button } from "shared/ui/button";
import ThemeIcon from "shared/assets/icons/theme.svg";
import s from "./theme-switcher.module.scss";

interface IProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<IProps> = ({ className = '' }) => {
	const { onToggleTheme } = useTheme();

	return (
		<Button className={cn(s.themeSwitcher, { [className]: !!className })} onClick={onToggleTheme}>
			<ThemeIcon />
		</Button>
	);
};

ThemeSwitcher.displayName = "ThemeSwitcher";