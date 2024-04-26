import { createContext } from "react";

export enum Theme {
  NORD = 'nord',
  SPACE_GRAY = 'space-gray'
}

export interface ThemeContextProps {
	theme?: Theme,
	setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';