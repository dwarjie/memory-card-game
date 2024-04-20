import { describe, expect, it, vi } from "vitest";
import MenuScreen from "./MenuScreen";
import { render, screen, waitFor } from "@testing-library/react";
import {
	BrowserRouter,
	RouterProvider,
	createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { isValidElement } from "react";

const renderWithRouter = (children, routes = []) => {
	const options = isValidElement(children)
		? { element: children, path: "/" }
		: children;

	const router = createMemoryRouter([{ ...options }, ...routes], {
		initialEntries: [options.path],
		initialIndex: 1,
	});

	return render(<RouterProvider router={router} />);
};

describe("Menuscreen component", () => {
	it("renders correct title", () => {
		renderWithRouter(<MenuScreen />);

		const headingArray = screen.getAllByRole("heading");

		expect(headingArray.length).toBe(4);
		expect(headingArray[0].textContent).toBe("ANIME");
		expect(headingArray[1].textContent).toBe("SCHOOL");
	});

	it("renders correct buttons", () => {
		renderWithRouter(<MenuScreen />);

		expect(screen.getByRole("link", { name: "PLAY" })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "ABOUT" })).toBeInTheDocument();
	});

	it("navigating to play page", async () => {
		const user = userEvent.setup();
		renderWithRouter(<MenuScreen />, [
			{
				path: "/play/memory-card",
				element: <h1>Play Page</h1>,
			},
		]);

		await user.click(screen.getByRole("link", { name: /play/i }));
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
			/play page/i
		);
	});

	it("navigating to about page", async () => {
		const user = userEvent.setup();
		renderWithRouter(<MenuScreen />, [
			{
				path: "/about",
				element: <h1>About Page</h1>,
			},
		]);

		await user.click(screen.getByRole("link", { name: /about/i }));
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
			/about page/i
		);
	});
});
