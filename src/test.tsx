import { createRoot } from 'react-dom/client';

export const testFn = () => {
    const root = createRoot(document.getElementById('root'));
    root.render(<h1>Hello, world</h1>);
}