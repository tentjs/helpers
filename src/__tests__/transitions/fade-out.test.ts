import { tags } from "@tentjs/tent";
import { fadeOut } from "../../transitions";

describe("fadeOut", () => {
  it("should add a class to the element on .remove()", () => {
    const el = tags.div("");

    fadeOut(el, "fade-out");
    el.remove();

    expect(el.classList.contains("fade-out")).toBe(true);
  });

  it("should remove a class on animationend", () => {
    const el = tags.div("");

    fadeOut(el, "fade-out");
    el.remove();
    el.dispatchEvent(new Event("animationend"));

    expect(el.classList.contains("fade-out")).toBe(false);
  });

  it("should remove element on animationend", () => {
    const el = tags.div("");

    document.body.append(el);
    fadeOut(el, "fade-out");
    el.remove();
    el.dispatchEvent(new Event("animationend"));

    expect(document.body.contains(el)).toBe(false);
  });

  it("should call `onStart` on animationstart", () => {
    const el = tags.div("");
    const onStart = jest.fn();

    fadeOut(el, "fade-out", { onStart });
    el.remove();
    el.dispatchEvent(new Event("animationstart"));

    expect(onStart).toHaveBeenCalledWith(el);
  });

  it("should call `onEnd` on animationend", () => {
    const el = tags.div("");
    const onEnd = jest.fn();

    fadeOut(el, "fade-out", { onEnd });
    el.remove();
    el.dispatchEvent(new Event("animationend"));

    expect(onEnd).toHaveBeenCalledWith(el);
  });
});
