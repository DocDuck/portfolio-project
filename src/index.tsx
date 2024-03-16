import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app/ui';
import { ThemeProvider } from './shared/theme/ui/ThemeProvider';

const root = createRoot(document.getElementById('root'));
root.render(
	<Router>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</Router>
);