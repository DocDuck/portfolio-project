import { cn } from "shared/lib/class-names";
import s from "./sidebar.module.scss"
import { useState } from "react";
import { ThemeSwitcher } from "widgets/theme-switcher/ui";
import { LanguageSwitcher } from "widgets/language-switcher/ui";

interface IProps {
    className: string;
}
export const Sidebar: React.FC<IProps> = ({ className }) => {
    const [colapsed, setColapsed] = useState(false);
    
    return (
        <aside className={cn(s.sidebar, { [s.colapsed]: colapsed }, className)}>
            <div className={s.toggler} onClick={() => setColapsed(colapsed => !colapsed)}>{colapsed ? '>' : '<'}</div>
            <div className={s.controls}>
                <ThemeSwitcher className={s.themeSwitcher} />
                <LanguageSwitcher />
            </div>
        </aside>
    )
 }
Sidebar.displayName = 'Sidebar'