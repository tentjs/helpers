import type { TentNode } from "@tentjs/tent";
import { fadeIn } from "./fade-in";
import { fadeOut } from "./fade-out";
import type { Options } from "./types";

type O = {
  fadeIn?: Options;
  fadeOut?: Options;
};

function fadeInOut(
  el: TentNode,
  classNames: [string, string],
  options: O = {},
) {
  fadeIn(el, classNames[0], options.fadeIn);
  fadeOut(el, classNames[1], options.fadeOut);
}

export { fadeInOut };
