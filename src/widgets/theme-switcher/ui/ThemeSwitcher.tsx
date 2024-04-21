import { cn } from "shared/lib/class-names";
import { useTheme } from "shared/theme";

interface IProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<IProps> = ({ className = '' }) => {
    const { theme, onToggleTheme } = useTheme();

    return (
        <button className={cn({[className]: className})} onClick={onToggleTheme}>{theme}</button>
    )
}

ThemeSwitcher.displayName = "ThemeSwitcher"