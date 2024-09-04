import { Suspense } from 'react';
import { Router } from 'app/providers';
import { Navbar } from 'widgets/navbar/ui';
import { Sidebar } from 'widgets/sidebar/ui';
import { cn } from 'shared/lib/classNames';
import { useTheme } from 'shared/theme';
import s from "./app.module.scss";

export const App: React.FC = () => {

	const { theme } = useTheme();

	return (
		<div className={cn(s.app, theme)}>
			<Suspense>
				<Navbar className={s.navbar}/>
				<div className={s.wrapper}>
					<Sidebar className={s.sidebar} />
					<Router className={s.page} />
				</div>
			</Suspense>
		</div>
	);
};

App.displayName = "App";
