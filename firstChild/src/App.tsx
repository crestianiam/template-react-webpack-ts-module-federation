import React from 'react';
import { useTheme } from "container/ThemeContext";

const App: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div>
            <h1 style={{ color: "green" }}>Hello, i am the first child app and i see the parent context theme which is {theme}</h1>
        </div>
    );
};

export default App;