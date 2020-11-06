import { render, cleanup, screen } from "@testing-library/react";
import Forecast from "./Forecast";

afterEach(cleanup);

test("it should display forecast title", () => {
  render(<Forecast />);
  expect(screen.getByText(/forecast/i)).toBeInTheDocument();
});
test("it should display weather information from list prop", () => {
  render(
    <Forecast
      list={[
        { main: { temp: "23" }, weather: [{ main: "sunny" }] },
        { main: { temp: "24" }, weather: [{ main: "cloudy" }] },
      ]}
    />
  );
  expect(screen.getByText(/23/i)).toBeInTheDocument();
  expect(screen.getByText(/24/i)).toBeInTheDocument();
  expect(screen.getByText(/sunny/i)).toBeInTheDocument();
  expect(screen.getByText(/cloudy/i)).toBeInTheDocument();
});
