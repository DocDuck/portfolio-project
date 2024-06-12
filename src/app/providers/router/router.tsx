import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { PageLoader } from 'widgets/pageLoader/ui';
import { cn } from 'shared/lib/classNames';

interface IProps {
  className?: string;
}

export const Router: React.FC<IProps> = ({ className = "" }) => (
	<Routes>
		{Object.values(routes).map(({ element, path }) => (
			<Route
				key={path}
				element={(
					<Suspense fallback={<PageLoader />}>
						<div className={cn({ [className]: !!className})}>{element}</div>
					</Suspense>
				)}
				path={path}
			/>        
		))}
	</Routes>
);

Router.displayName = "Router";