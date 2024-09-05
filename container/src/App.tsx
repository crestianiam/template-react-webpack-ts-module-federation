import React, { Suspense } from 'react';
import { ThemeProvider, useTheme } from 'container/ThemeContext';
import './global.css';

const FirstChildApp = React.lazy(() => import('firstChild/App'));
const SecondChildApp = React.lazy(() => import('secondChild/App'));

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <ThemedApp />
        </ThemeProvider>
    );
};

const ThemedApp: React.FC = () => {
    const { theme, switchTheme } = useTheme();

    return (
        <div className={`app ${theme}-theme`}>
            <h1>Hello, I am the container app!ssssaas</h1>
            <button onClick={switchTheme}>Switch Theme</button>
            <Suspense fallback={<div>Loading First Child App...</div>}>
                <FirstChildApp />
            </Suspense>
            <Suspense fallback={<div>Loading Second Child App...</div>}>
                <SecondChildApp />
            </Suspense>
        </div>
    );
};

export default App;