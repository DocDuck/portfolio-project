import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { Decorator } from '@storybook/react';
import 'shared/theme/ui/styles/palette/aquamarine.scss';
import 'shared/theme/ui/styles/palette/dracula.scss';
import 'shared/theme/ui/styles/palette/nord.scss';
import 'shared/theme/ui/styles/palette/space-gray.scss';
import s from 'app/ui/app.module.scss';
import { ThemeProvider } from 'app/providers';
import { cn } from 'shared/lib/classNames';
import { Theme } from 'shared/theme';

export const ThemeDecorator: Decorator = (Story, context) => {
	return (withThemeFromJSXProvider({
		Provider: ThemeProvider,
	})
		(() => (
			<div className={cn(s.app, context.globals.theme || Theme.NORD)} style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Story />
			</div>
		), context))
};
		
export const themeGlobalTypes = {
	theme: {
		description: 'Global theme for components',
		defaultValue: Theme.NORD,
		toolbar: {
			// The label to show for this toolbar item
			title: 'Theme',
			icon: 'circle',
			// Array of plain string values or MenuItem shape (see below)
			items: [Theme.NORD, Theme.SPACE_GRAY],
			// Change title based on selected value
			dynamicTitle: true,
		},
	}
}