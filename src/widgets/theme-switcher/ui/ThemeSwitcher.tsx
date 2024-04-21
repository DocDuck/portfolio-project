import { cn } from "shared/lib/class-names";
import { useTheme } from "shared/theme";
import ThemeIcon from "shared/assets/icons/theme.svg"
import s from "./theme-switcher.module.scss"

interface IProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<IProps> = ({ className = '' }) => {
    const { theme, onToggleTheme } = useTheme();

    return (
        <button className={cn(s.themeSwitcher, { [className]: className })} onClick={onToggleTheme}>
            <ThemeIcon />
            {theme}
        </button>
    )
}

ThemeSwitcher.displayName = "ThemeSwitcher"