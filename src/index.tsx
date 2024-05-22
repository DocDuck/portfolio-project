import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'app/ui';
import { ErrorBoundary, ThemeProvider } from 'app/providers';
import 'app/ui/styles/index.scss';
import 'shared/config/i18n';
import { PageError } from 'widgets/page-error';
import { PageLoader } from 'widgets/page-loader/ui';

const root = createRoot(document.getElementById('root')!);
root.render(
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
);