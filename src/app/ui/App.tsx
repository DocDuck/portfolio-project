import { Router } from 'app/providers';
import { NavBar } from 'widgets/nav-bar/NavBar';
import { cn } from 'shared/lib/class-names';
import { useTheme } from 'shared/theme';
import s from "./app.module.scss"

export const App: React.FC = () => {

  const { onToggleTheme, theme } = useTheme()

  return (
    <div className={cn(s.app, theme)}>
      <NavBar />
      <div className={s.content}>
        <button onClick={onToggleTheme}>{theme}</button>
        <Router />
      </div>
    </div>
  )
};

App.displayName = "App"
