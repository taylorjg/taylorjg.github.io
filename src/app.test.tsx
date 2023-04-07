import { render, screen } from "@testing-library/react";
import { App } from "./app";

test("renders projects", () => {
  render(<App />);
  expect(screen.getByText("Sudoku Buster")).toBeInTheDocument();
  expect(screen.getByText("Shazizzle")).toBeInTheDocument();
});
