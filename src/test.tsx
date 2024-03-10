import { createRoot } from 'react-dom/client';
import { App } from './app/App';

export const testFn = () => {
    const root = createRoot(document.getElementById('root'));
    root.render(<App />);
}