import { cn } from "shared/lib/class-names";
import { useTheme } from "shared/theme";
import { Button } from "shared/ui/button";
import ThemeIcon from "shared/assets/icons/theme.svg"
import s from "./theme-switcher.module.scss"

interface IProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<IProps> = ({ className = '' }) => {
    const { theme, onToggleTheme } = useTheme();

    return (
        <Button className={cn(s.themeSwitcher, { [className]: !!className })} onClick={onToggleTheme}>
            <ThemeIcon />
            {theme}
        </Button>
    )
}

ThemeSwitcher.displayName = "ThemeSwitcher"