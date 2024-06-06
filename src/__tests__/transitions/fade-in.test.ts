import { tags } from "@tentjs/tent";
import { fadeIn } from "../../transitions";

describe("fadeIn", () => {
  it("should add a class to the element", () => {
    const el = tags.div("");

    fadeIn(el, "fade-in");

    expect(el.classList.contains("fade-in")).toBe(true);
  });

  it("should remove the class on animationend", () => {
    const el = tags.div("");

    fadeIn(el, "fade-in");
    el.dispatchEvent(new Event("animationend"));

    expect(el.classList.contains("fade-in")).toBe(false);
  });

  it("should call `onStart` on animationstart", () => {
    const el = tags.div("");
    const onStart = jest.fn();

    fadeIn(el, "fade-in", { onStart });
    el.dispatchEvent(new Event("animationstart"));

    expect(onStart).toHaveBeenCalledWith(el);
  });

  it("should call `onEnd` on animationend", () => {
    const el = tags.div("");
    const onEnd = jest.fn();

    fadeIn(el, "fade-in", { onEnd });
    el.dispatchEvent(new Event("animationend"));

    expect(onEnd).toHaveBeenCalledWith(el);
  });
});
