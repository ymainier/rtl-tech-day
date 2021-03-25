import ReactDOM from "react-dom";
import App from "./App";

test("Clicking increments the counter", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  ReactDOM.render(<App />, container);

  expect(container.querySelector("p").textContent).toBe("Nb click: 0");

  const increment = container.querySelector("button");
  increment.click();

  expect(container.querySelector("p").textContent).toBe("Nb click: 1");

  container.remove();
});
