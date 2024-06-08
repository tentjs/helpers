import type { Attrs, TentNode } from "@tentjs/tent";
import { fadeIn } from "./fade-in";
import { fadeOut } from "./fade-out";
import type { Options } from "./types";

type O<A extends Attrs> = {
  fadeIn?: Options<A>;
  fadeOut?: Options<A>;
};

function fadeInOut<A extends Attrs>(
  el: TentNode<A>,
  classNames: [string, string],
  options: O<A> = {},
) {
  fadeIn(el, classNames[0], options.fadeIn);
  fadeOut(el, classNames[1], options.fadeOut);
}

export { fadeInOut };
