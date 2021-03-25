import ReactDOM from "react-dom";
import App from "./App";

function click(element) {
  element.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true })
  );
}

test("Clicking increments the counter", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  ReactDOM.render(<App />, container);

  const increment = container.querySelector("button");
  const paragraph = container.querySelector("p");

  expect(paragraph.textContent).toBe("Nb click: 0");

  click(increment)
  expect(paragraph.textContent).toBe("Nb click: 1");

  click(increment)
  expect(paragraph.textContent).toBe("Nb click: 2");

  container.remove();
});
