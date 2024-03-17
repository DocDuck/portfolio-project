import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/theme-context";

interface UseThemeResult {
  theme: Theme,
  onToggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const onToggleTheme = () => {
		const newTheme = theme === Theme.NORD ? Theme.SPACE_GRAY : Theme.NORD
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	};
	
	return {
		theme,
		onToggleTheme
	}
}