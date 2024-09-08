import { render, screen } from '@testing-library/react';
import { Input } from 'shared/ui/input';
describe('Input', () => {
	test('render', () => {
		render(<Input>TEST</Input>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});
	test('clean mode', () => {
		render(<Input mode='clean'>TEST</Input>);
		expect(screen.getByText('TEST')).toHaveClass('clean');
	});
	test('filled mode', () => {
		render(<Input mode='filled'>TEST</Input>);
		expect(screen.getByText('TEST')).toHaveClass('filled');
	});
	test('border mode', () => {
		render(<Input mode='border'>TEST</Input>);
		expect(screen.getByText('TEST')).toHaveClass('border');
	});
});
