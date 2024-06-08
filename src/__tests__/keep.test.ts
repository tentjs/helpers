import { type Component, tags, mount } from "@tentjs/tent";
import { keep } from "../keep";
import { fireEvent, screen } from "@testing-library/dom";

const { div, button } = tags;

describe("keep", () => {
  it("should keep the children", () => {
    const TestComponent: Component<{ count: number }> = {
      state: { count: 0 },
      view({ state }) {
        return div([
          div(`Count: ${state.count}`),
          keep([
            div(`Count-keep: ${state.count}`),
            button("Increment", { onclick: () => state.count++ }),
          ]),
        ]);
      },
    };

    mount(document.body, TestComponent);

    const btn = screen.getByRole("button");

    expect(screen.getByText("Count: 0")).toBeTruthy();

    fireEvent.click(btn);

    expect(screen.getByText("Count: 1")).toBeTruthy();
    expect(screen.getByText("Count-keep: 0")).toBeTruthy();
  });
});
