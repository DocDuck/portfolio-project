import { render, screen } from '@testing-library/react';
import { Input } from 'shared/ui/input';
describe('Input', () => {
	test('render', () => {
		render(<Input value='TEST' />);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});
	test('placeholder mode', () => {
		render(<Input value='TEST' placeholder='placeholder' />);
		//expect(screen.getByText('TEST')).toHaveClass('clean');
	});
});
