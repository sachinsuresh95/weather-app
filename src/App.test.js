import { render, cleanup, act, screen } from "@testing-library/react";
import { App } from "./App";
import api from "./api";

jest.mock("./api");

afterEach(cleanup);

test("renders App heading", () => {
  api.getWeatherDataById.mockImplementationOnce(() =>
    Promise.resolve({ weather: "cool" })
  );
  act(() => {
    render(<App toggleLoader={() => {}} />);
  });
  expect(screen.getByText(/weather app/i)).toBeInTheDocument();
});
test("calls toggle loader function", () => {
  const toggleLoader = jest.fn();
  api.getWeatherDataById.mockImplementationOnce(() =>
    Promise.resolve({ weather: "cool" })
  );
  act(() => {
    render(<App toggleLoader={toggleLoader} />);
  });
  expect(toggleLoader).toHaveBeenCalled();
});
test("calls getWeatherDataById function", () => {
  const toggleLoader = jest.fn();
  api.getWeatherDataById.mockImplementationOnce(() =>
    Promise.resolve({ weather: "cool" })
  );
  act(() => {
    render(<App toggleLoader={toggleLoader} />);
  });
  expect(api.getWeatherDataById).toHaveBeenCalled();
});
