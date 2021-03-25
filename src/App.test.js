import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import App from "./App";

test("Clicking increments the counter", () => {
  render(<App />);

  const increment = screen.getByRole("button");
  const paragraph = screen.getByText(/nb click/i);

  expect(paragraph.textContent).toBe("Nb click: 0");

  userEvent.click(increment);
  expect(paragraph.textContent).toBe("Nb click: 1");

  userEvent.click(increment);
  expect(paragraph.textContent).toBe("Nb click: 2");
});
