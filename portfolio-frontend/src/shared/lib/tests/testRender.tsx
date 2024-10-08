import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nTest from 'shared/config/i18nTest';
import { StoreProvider } from 'app/providers';
import { RootState } from 'app/providers/store';

interface RenderForTestsOptions {
	path?: string;
	preloadedState?: RootState;
}

export function testRender(
	component: ReactNode,
	options: RenderForTestsOptions = {}
) {
	const { path = '/', preloadedState } = options;
	return render(
		<StoreProvider preloadedState={preloadedState}>
			<MemoryRouter initialEntries={[path]}>
				<I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>
	);
}
