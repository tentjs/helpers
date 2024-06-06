import { tags } from "@tentjs/tent";
import { getByText } from "@testing-library/dom";
import { mountAll } from "../mount-all";

beforeEach(() => {
  for (let i = 1; i <= 4; i++) {
    const div = document.createElement("div");
    div.id = `component-${i}`;
    document.body.appendChild(div);
  }
});

afterEach(() => {
  document.body.innerHTML = "";
});

describe("mountAll", () => {
  it("mounts all components in the record", () => {
    const components = [
      {
        target: "#component-1",
        component: { view: () => tags.div("Component 1") },
      },
      {
        target: "#component-2",
        component: { view: () => tags.div("Component 2") },
      },
      {
        target: "#component-3",
        component: { view: () => tags.div("Component 3") },
      },
    ];

    mountAll(components);

    for (let i = 1; i <= 3; i++) {
      expect(getByText(document.body, `Component ${i}`)).toBeDefined();
    }
  });
});
