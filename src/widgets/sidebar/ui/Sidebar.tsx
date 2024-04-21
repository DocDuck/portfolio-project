import { cn } from "shared/lib/class-names";
import s from "./sidebar.module.scss"
import { useState } from "react";

interface IProps {
    className: string;
}
export const Sidebar: React.FC<IProps> = ({ className }) => {
    const [colapsed, setColapsed] = useState(false);
    
    return (
        <aside className={cn(s.sidebar, { [s.colapsed]: colapsed }, className)}>
            <div className={s.toggler} onClick={() => setColapsed(colapsed => !colapsed)}>{'>'}</div>
        </aside>
    )
 }
Sidebar.displayName = 'Sidebar'