import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nTest from "shared/config/i18nTest";

interface RenderForTestsOptions {
  path?: string;
}

export function renderForTests(component: ReactNode, options: RenderForTestsOptions = {}) {
	const {
		path = '/'
	} = options;
	return render(
		<MemoryRouter initialEntries={[path]}>
			<I18nextProvider i18n={i18nTest}>
			  {component}
			</I18nextProvider>
		</MemoryRouter>
	);
}