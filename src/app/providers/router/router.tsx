import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

interface IProps {
    className: string;
}

export const Router: React.FC<IProps> = ({ className = "" }) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routes).map(({ element, path }) => (
                <Route
                    key={path}
                    element={
                        (<div className={className}>{element}</div>)
                    }
                    path={path}
                />        
            ))}
        </Routes>
    </Suspense>
)

Router.displayName = "Router"