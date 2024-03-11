import { useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext, ThemeContextProps } from "./ThemeContext"

type Props = {
	children?: React.ReactNode
};
  
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.NORD;

export const ThemeProvider: React.FC<Props> = ({ children }) => {

	const [theme, setTheme] = useState<THEME>(defaultTheme);

	const value = useMemo<ThemeContextProps>(() => ({
		theme,
		setTheme
	}), [theme, setTheme]);

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>)
}