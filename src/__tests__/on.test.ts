import { mount, tags } from "@tentjs/tent";
import { on } from "../on";
import { fireEvent, getByRole } from "@testing-library/dom";

describe("on", () => {
  it("should call the provided functions", () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const events = {
      Enter: fn1,
      Escape: fn2,
    };

    on(events)(new KeyboardEvent("keydown", { key: "Enter" }));
    on(events)(new KeyboardEvent("keydown", { key: "Escape" }));

    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);
  });

  it("should call the functions in a component", () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const events = {
      Enter: fn1,
      Escape: fn2,
    };

    mount(document.body, {
      view: () =>
        tags.input([], {
          onkeydown: on(events),
        }),
    });

    const input = getByRole(document.body, "textbox");

    fireEvent.keyDown(input, { key: "Enter" });
    fireEvent.keyDown(input, { key: "Escape" });

    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);
  });
});
