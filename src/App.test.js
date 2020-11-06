import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Weather App/i);
  expect(headingElement).toBeInTheDocument();
});

test("runs toggleloader function on mount", () => {
  const toggleLoader = jest.fn();
  render(<App toggleLoader={toggleLoader} />);
  expect(toggleLoader).toHaveBeenCalled();
});
