import { render, screen } from '@testing-library/react';
import { Input } from 'shared/ui/input';
describe('Input', () => {
	test('render with placeholder', () => {
		render(<Input value='TEST' placeholder='placeholder' />);
		expect(screen.getByText('placeholder')).toBeInTheDocument();
	});
});
