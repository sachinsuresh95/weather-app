import { render, cleanup, screen } from "@testing-library/react";
import WeatherReport from "./WeatherReport";

afterEach(cleanup);

test("it should display correct information", () => {
  const mockData = {
    city: { name: "Testcity" },
    list: [
      {
        main: { temp: "25" },
        weather: [{ main: "sunny", description: "cloudy", icon: "10d" }],
      },
    ],
  };
  render(<WeatherReport weather={mockData} />);
  expect(screen.queryByText(/testcity/i)).toBeInTheDocument();
  expect(screen.queryByText(/25/i)).toBeInTheDocument();
  expect(screen.queryByText(/sunny/i)).toBeInTheDocument();
  expect(screen.queryByText(/cloudy/i)).toBeInTheDocument();
});
