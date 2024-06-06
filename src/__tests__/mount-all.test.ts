import { tags, type Component } from "@tentjs/tent";
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
    const components: Record<string, Component> = {
      "#component-1": { view: () => tags.div("Component 1") },
      "#component-2": { view: () => tags.div("Component 2") },
      "#component-3": { view: () => tags.div("Component 3") },
      "#component-4": { view: () => tags.div("Component 4") },
    };

    mountAll(components);

    for (let i = 1; i <= 4; i++) {
      expect(getByText(document.body, `Component ${i}`)).toBeDefined();
    }
  });
});
