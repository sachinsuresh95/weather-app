import {
  render,
  cleanup,
  act,
  screen,
  fireEvent,
} from "@testing-library/react";
import Select from "./Select";

afterEach(cleanup);

test("it should display label text from props", () => {
  render(<Select label={"test"} options={[]} />);
  expect(screen.queryByText(/test/i)).toBeInTheDocument();
});
test("it should display each option from props", () => {
  render(
    <Select
      label={"test"}
      options={[
        { id: "1", name: "test1" },
        { id: "2", name: "test2" },
      ]}
    />
  );
  expect(screen.queryByText(/test1/i)).toBeInTheDocument();
  expect(screen.queryByText(/test2/i)).toBeInTheDocument();
});
test("it should call onchange from props on select", () => {
  const onChange = jest.fn();
  const { container } = render(
    <Select
      label={"test"}
      options={[
        { id: "1", name: "test1" },
        { id: "2", name: "test2" },
      ]}
      onChange={onChange}
    />
  );
  fireEvent.change(container.querySelector("select"), {
    target: { value: "test" },
  });
  expect(onChange).toHaveBeenCalled();
});
