import { tags } from "@tentjs/tent";
import { fadeIn, fadeInOut, fadeOut } from "../../transitions";

jest.mock("../../transitions/fade-in", () => ({
  fadeIn: jest.fn(),
}));

jest.mock("../../transitions/fade-out", () => ({
  fadeOut: jest.fn(),
}));

describe("fadeInOut", () => {
  it("calls fadeIn and fadeOut", () => {
    const el = tags.div("");

    const options = {
      fadeIn: { onStart: jest.fn(), onEnd: jest.fn() },
      fadeOut: { onStart: jest.fn(), onEnd: jest.fn() },
    };

    fadeInOut(el, ["fade-in", "fade-out"], options);

    expect(fadeIn).toHaveBeenCalledWith(el, "fade-in", options.fadeIn);
    expect(fadeOut).toHaveBeenCalledWith(el, "fade-out", options.fadeOut);
  });
});
