import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from 'widgets/pageLoader';
import { routes } from './routes';
import { cn } from 'shared/lib/classNames';

interface IProps {
	className?: string;
}

export const Router: React.FC<IProps> = ({ className = '' }) => (
	<Routes>
		{Object.values(routes).map(({ element, path }) => (
			<Route
				key={path}
				element={
					<Suspense fallback={<PageLoader />}>
						<div className={cn({ [className]: !!className })}>{element}</div>
					</Suspense>
				}
				path={path}
			/>
		))}
	</Routes>
);

Router.displayName = 'Router';
