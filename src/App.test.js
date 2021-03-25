import { render, screen } from "@testing-library/react";
import App from "./App";

function click(element) {
  element.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true })
  );
}

test("Clicking increments the counter", () => {
  render(<App />);

  const increment = screen.getByRole("button");
  const paragraph = screen.getByText(/nb click/i);

  expect(paragraph.textContent).toBe("Nb click: 0");

  click(increment);
  expect(paragraph.textContent).toBe("Nb click: 1");

  click(increment);
  expect(paragraph.textContent).toBe("Nb click: 2");
});
