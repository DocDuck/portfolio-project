import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'app/ui';
import { ThemeProvider } from 'app/providers';
import 'app/ui/styles/index.scss';
import 'shared/config/i18n';

const root = createRoot(document.getElementById('root'));
root.render(
	<Router>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</Router>
);