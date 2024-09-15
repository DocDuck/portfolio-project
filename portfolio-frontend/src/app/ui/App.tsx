import { Suspense, useEffect } from 'react';
import { Router } from 'app/providers';
import { userThunks } from 'entities/user';
import { Navbar } from 'widgets/navbar/ui';
import { Sidebar } from 'widgets/sidebar/ui';
import { cn } from 'shared/lib/classNames';
import { useTheme } from 'shared/theme';
import { useAppDispatch } from 'shared/hooks/store';
import s from './app.module.scss';

export const App: React.FC = () => {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	/**
	 * Проверка сессии пользователя
	 */
	useEffect(() => {
		dispatch(userThunks.authByTokenThunk()).catch(console.error);
	}, [dispatch]);

	return (
		<div className={cn(s.app, theme)}>
			<Suspense>
				<Navbar className={s.navbar} />
				<div className={s.wrapper}>
					<Sidebar className={s.sidebar} />
					<Router className={s.page} />
				</div>
			</Suspense>
		</div>
	);
};

App.displayName = 'App';
