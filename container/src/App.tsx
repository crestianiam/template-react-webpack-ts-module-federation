import React, { Suspense } from 'react';
import './global.css';
import FallbackRemote from './components/FallbackRemote';
import { ThemeProvider, useTheme } from 'container/ThemeContext';

const FirstChildApp = React.lazy(() =>
    import("firstChild/App").catch(() => {
        return { default: () => <FallbackRemote name='firstChild/App' /> };
    })
)

const SecondChildApp = React.lazy(() =>
    import("secondChild/App").catch(() => {
        return { default: () => <FallbackRemote name='secondChild/App' /> };
    })
);
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
            <h1>Hello, I am the container app!</h1>
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