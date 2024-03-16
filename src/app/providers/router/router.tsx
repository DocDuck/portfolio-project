import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

export const Router: React.FC = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routes).map(({ element, path }) => (
                <Route
                    key={path}
                    element={element}
                    path={path}
                />        
            ))}
        </Routes>
    </Suspense>
)

Router.displayName = "Router"