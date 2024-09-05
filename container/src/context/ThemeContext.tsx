import React, { createContext, ReactNode, useCallback, useContext, useState } from "react";

type Theme = "light" | "dark";

const DEFAULT_VALUE: Theme = "light";

type ThemeContextType = {
    theme: Theme;
    switchTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(DEFAULT_VALUE);

    const switchTheme = useCallback(() => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }, [])

    return (
        <ThemeContext.Provider value={{
            theme,
            switchTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

