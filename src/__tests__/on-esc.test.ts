import { tags, mount } from "@tentjs/tent";
import { onEsc } from "../on-esc";

afterEach(() => {
  document.body.innerHTML = "";
});

describe("onEsc", () => {
  it("calls the provided function", () => {
    const fn = jest.fn();
    const handler = onEsc(fn);

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

    expect(fn).toHaveBeenCalled();

    document.removeEventListener("keydown", handler);
  });

  it("removes the event listener", () => {
    const fn = jest.fn();

    onEsc(fn, { cleanup: true });

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

    expect(fn).toHaveBeenCalled();

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("it calls and removes handler in a component", () => {
    const handler = jest.fn();

    const TestComponent = {
      view() {
        return tags.div([], {
          mounted() {
            onEsc(handler, { cleanup: true });
          },
        });
      },
    };

    mount(document.body, TestComponent);

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

    expect(handler).toHaveBeenCalled();

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
