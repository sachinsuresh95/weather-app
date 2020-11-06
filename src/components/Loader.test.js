import { render, cleanup, act, screen } from "@testing-library/react";
import React from "react";

import withLoader from "./Loader";

afterEach(cleanup);

test("should pass toggleLoader as prop to component", () => {
  class MockComponent extends React.Component {
    render() {
      const test = Object.keys(this.props).includes("toggleLoader")
        ? "success"
        : "fail";
      return <div>{test}</div>;
    }
  }
  const MockWithLoader = withLoader(MockComponent);
  act(() => {
    render(<MockWithLoader />);
  });
  expect(screen.getByText("success")).toBeInTheDocument();
});
