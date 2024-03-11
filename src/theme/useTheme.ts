import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from "./ThemeContext"

interface UseThemeResult {
  theme: THEME,
  onToggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const onToggleTheme = () => {
		const newTheme = theme === THEME.NORD ? THEME.SPACE_GRAY : THEME.NORD
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	};
	
	return {
		theme,
		onToggleTheme
	}
}