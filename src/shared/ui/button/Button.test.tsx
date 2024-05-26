import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui/button";
describe('Button', () => {
	test('render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText("TEST")).toBeInTheDocument();
	});
	test('clear mode', () => {
		render(<Button mode="clear">TEST</Button>);
		expect(screen.getByText("TEST")).toHaveClass('clear');
	});
});