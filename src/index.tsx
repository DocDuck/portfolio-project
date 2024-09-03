import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'app/ui';
import { ErrorBoundary, StoreProvider, ThemeProvider } from 'app/providers';
import { PageError } from 'widgets/pageError';
import { PageLoader } from 'widgets/pageLoader/ui';
import 'shared/config/i18n';
import 'app/ui/styles/index.scss';

const root = createRoot(document.getElementById('root')!);
root.render(
	<StoreProvider>
		<Router>
			<ErrorBoundary fallback={(
				<Suspense fallback={<PageLoader />}>
					<PageError />
				</Suspense>
			)}>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</Router>
	</StoreProvider>
);