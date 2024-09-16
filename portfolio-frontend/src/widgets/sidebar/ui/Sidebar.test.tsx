import { fireEvent, screen } from '@testing-library/react';
import { renderForTests } from 'shared/lib/tests';
import { Sidebar } from 'widgets/sidebar';

describe('Sidebar', () => {
	test('render', () => {
		renderForTests(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('toggle', () => {
		renderForTests(<Sidebar />);
		const btn = screen.getByTestId('sidebar-toggle-btn');
		fireEvent.click(btn);
		expect(screen.getByTestId('sidebar')).toHaveClass('colapsed');
	});
});
