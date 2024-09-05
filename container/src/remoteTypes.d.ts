declare module 'firstChild/App' {
    const FirstChildApp: React.ComponentType;
    export default FirstChildApp;
}

declare module 'secondChild/App' {
    const SecondChildApp: React.ComponentType;
    export default SecondChildApp;
}

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