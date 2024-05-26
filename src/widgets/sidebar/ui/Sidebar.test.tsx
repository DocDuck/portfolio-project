import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests";
import { Sidebar } from "widgets/sidebar/ui";

describe('Sidebar', () => {
	test('render', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});
	test('toggle', () => {
		renderWithTranslation(<Sidebar />);
		const btn = screen.getByTestId("sidebar-toggle-btn");
		fireEvent.click(btn);
		expect(screen.getByTestId("sidebar")).toHaveClass('colapsed');
	});
});