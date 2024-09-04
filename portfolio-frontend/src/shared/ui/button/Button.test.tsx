import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui/button";
describe('Button', () => {
	test('render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText("TEST")).toBeInTheDocument();
	});
	test('clean mode', () => {
		render(<Button mode="clean">TEST</Button>);
		expect(screen.getByText("TEST")).toHaveClass('clean');
	});
	test('filled mode', () => {
		render(<Button mode="filled">TEST</Button>);
		expect(screen.getByText("TEST")).toHaveClass('filled');
	});
	test('border mode', () => {
		render(<Button mode="border">TEST</Button>);
		expect(screen.getByText("TEST")).toHaveClass('border');
	});
});