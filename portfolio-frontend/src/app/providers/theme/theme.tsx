import { useEffect, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from "shared/theme/lib/theme-context";

interface Props {
	children?: React.ReactNode
}
  
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORD;

export const ThemeProvider: React.FC<Props> = ({ children }) => {

	
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);
	
	const value = useMemo<ThemeContextProps>(() => ({
		theme,
		setTheme
	}), [theme, setTheme]);

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>);
};

ThemeProvider.displayName = "ThemeProvider";