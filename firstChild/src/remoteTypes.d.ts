declare module 'container/ThemeContext' {
    type Theme = "light" | "dark";

    interface ThemeContextType {
        theme: Theme;
        switchTheme: () => void;
    }

    export function useTheme(): ThemeContextType;

    interface ThemeProviderProps {
        children: React.ReactNode;
    }

    export const ThemeProvider: React.FC<ThemeProviderProps>;
}