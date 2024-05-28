import { withThemeByClassName } from '@storybook/addon-themes';
import { Decorator, ReactRenderer } from '@storybook/react';
import { Theme } from 'shared/theme';
import 'shared/theme/ui/styles/palette/aquamarine.scss';
import 'shared/theme/ui/styles/palette/dracula.scss';
import 'shared/theme/ui/styles/palette/nord.scss';
import 'shared/theme/ui/styles/palette/space-gray.scss';
import s from 'app/ui/app.module.scss';

export const ThemeDecorator: Decorator = (...args) => (
	<div className={s.app} style={{justifyContent: 'center', alignItems: 'center'}}>
		{withThemeByClassName<ReactRenderer>({
			themes: {
				light: Theme.SPACE_GRAY,
				dark: Theme.NORD,
			},
			defaultTheme: Theme.SPACE_GRAY,
		})(...args)}
	</div>
);