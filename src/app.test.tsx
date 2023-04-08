import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./app";

jest.mock("./analytics");

test("renders all project cards", () => {
  render(<App />);
  expect(screen.getByText("Sudoku Buster")).toBeInTheDocument();
  expect(screen.getByText("Shazizzle")).toBeInTheDocument();
  expect(screen.getByText("DlxLib Demos")).toBeInTheDocument();
  expect(screen.getByText("Solid Light Works")).toBeInTheDocument();
  expect(screen.getByText("Sliding Puzzle")).toBeInTheDocument();
  expect(screen.getByText("Rubik's Cube")).toBeInTheDocument();
  expect(screen.getByText("Repo Traffic")).toBeInTheDocument();
  expect(screen.getByText("Peg Solitaire")).toBeInTheDocument();
  expect(screen.getByText("Mastermind")).toBeInTheDocument();
  expect(screen.getByText("Basket Case")).toBeInTheDocument();
  expect(screen.getByText("dotnet-versioninfo")).toBeInTheDocument();
  expect(screen.getByText("Sparkler Game")).toBeInTheDocument();
});

test("can open and close the project details modal for a card", () => {
  render(<App />);
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  const [firstCard] = screen.getAllByTestId("card");
  userEvent.click(within(firstCard).getByText("Learn More"));
  const dialog = screen.getByRole("dialog");
  expect(dialog).toBeInTheDocument();
  expect(within(dialog).getByText("Sudoku Buster")).toBeInTheDocument();
  userEvent.click(within(dialog).getByLabelText("close"));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
