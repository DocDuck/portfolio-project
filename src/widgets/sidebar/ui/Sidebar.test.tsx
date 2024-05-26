import { render, screen } from "@testing-library/react";
import { Sidebar } from "widgets/sidebar/ui";

describe('Sidebar', () => {
	test('render', () => {
		render(<Sidebar />);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  // test('clear mode', () => {
	// 	render(<Button mode="clear">TEST</Button>);
  //   expect(screen.getByText("TEST")).toHaveClass('clear');
  //   screen.debug()
	// });
});