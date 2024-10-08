import { fireEvent, screen } from '@testing-library/react';
import { testRender } from 'shared/lib/tests';
import { Sidebar } from 'widgets/sidebar';

describe('Sidebar', () => {
	test('render', () => {
		testRender(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('toggle', () => {
		testRender(<Sidebar />);
		const btn = screen.getByTestId('sidebar-toggle-btn');
		fireEvent.click(btn);
		expect(screen.getByTestId('sidebar')).toHaveClass('colapsed');
	});
});
