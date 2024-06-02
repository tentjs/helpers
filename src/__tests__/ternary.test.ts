import { type Component, mount, tags } from "@tentjs/tent";
import { ternary } from "../ternary";
import { getByText } from "@testing-library/dom";

describe("ternary", () => {
  it("returns the truthy value", () => {
    expect(ternary(true, "Hello, world!")).toBe("Hello, world!");
  });

  it("returns the falsey value", () => {
    expect(ternary(false, "Truthy", "Falsey")).toBe("Falsey");
  });

  it("returns an empty string", () => {
    expect(ternary(false, "Truthy")).toBe("");
  });

  it("functions in a component", () => {
    mount(document.body, {
      view: () => tags.div(ternary(false, "Hello, world!", "This is false.")),
    });

    const el = getByText(document.body, /This is false\./);

    expect(el).toBeDefined();
  });
});
