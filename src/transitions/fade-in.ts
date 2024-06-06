import type { TentNode } from "@tentjs/tent";
import type { Options } from "./types";

/**
 * Fade in an element with CSS animations.
 *
 * @param {TentNode} el - The element to fade in.
 * @param {string} className - The class to add to the element.
 * @param {Options} [options] - The options for the fade in.
 *
 * @example
 * ```ts
 * mounted({ el }) {
 *   // Create CSS `@keyframes` rule and the `fade-in` class separately.
 *   // Not included in example.
 *   fadeIn(el, "fade-in", {
 *     onStart: () => console.log("Fade in started"),
 *     onEnd: () => console.log("Fade in ended"),
 *   });
 * }
 * ```
 */
function fadeIn(el: TentNode, className: string, options: Options = {}) {
  const { onStart, onEnd } = options;

  el.classList.add(className);
  el.addEventListener("animationstart", function handler() {
    el.removeEventListener("animationstart", handler);
    onStart?.(el);
  });
  el.addEventListener("animationend", function handler() {
    el.removeEventListener("animationend", handler);
    el.classList.remove(className);
    onEnd?.(el);
  });
}

export { fadeIn };
