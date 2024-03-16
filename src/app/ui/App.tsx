import { Link } from 'react-router-dom';

import { cn } from 'shared/lib/class-names';
import { Router } from 'app/providers';
import { useTheme } from 'shared/theme';
import "./styles/index.scss"
import s from "./styles.module.scss"

export const App: React.FC = () => {

  const { onToggleTheme, theme } = useTheme()

  return (
    <div className={cn(s.app, theme)}>
      <div className={s.links}>
        <button onClick={onToggleTheme}>{ theme }</button>
        <Link to="/">to Home</Link>
        <Link to="/about">to About</Link>
      </div>
      <Router />
    </div>
  )
};

App.displayName = "App"
