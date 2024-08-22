import React, { Suspense } from 'react';
const FirstChildApp = React.lazy(() => import('firstChild/App'));
const SecondChildApp = React.lazy(() => import('secondChild/App'));

const App: React.FC = () => {
    return (
        <div>
            <h1>Hello, i am the container app!</h1>
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