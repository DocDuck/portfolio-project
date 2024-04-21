import { Router } from 'app/providers';
import { Navbar } from 'widgets/navbar/ui';
import { Sidebar } from 'widgets/sidebar/ui';
import { cn } from 'shared/lib/class-names';
import { useTheme } from 'shared/theme';
import s from "./app.module.scss"

export const App: React.FC = () => {

  const { theme } = useTheme();

  return (
    <div className={cn(s.app, theme)}>
      <Navbar />
      <div className={s.content}>
        <Router />
      </div>
    </div>
  )
};

App.displayName = "App"
