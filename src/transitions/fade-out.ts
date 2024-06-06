import type { TentNode } from "@tentjs/tent";
import type { Options } from "./types";

/**
 * Fade out an element with CSS animations.
 *
 * @param {TentNode} el - The element to fade out.
 * @param {string} className - The class to add to the element.
 * @param {Options} [options] - The options for the fade out.
 *
 * @example
 * ```ts
 * mounted({ el }) {
 *   // Create CSS `@keyframes` rule and the `fade-out` class separately.
 *   // Not included in example.
 *   fadeOut(el, "fade-out", {
 *     onStart: () => console.log("Fade out started"),
 *     onEnd: () => console.log("Fade out ended"),
 *   });
 * }
 * ```
 */
function fadeOut(el: TentNode, className: string, options: Options = {}) {
  const { onStart, onEnd } = options;

  const { remove } = el;
  el.remove = function () {
    el.classList.add(className);
    el.addEventListener("animationstart", function handler() {
      el.removeEventListener("animationstart", handler);
      onStart?.(el);
    });
    el.addEventListener("animationend", function handler() {
      el.removeEventListener("animationend", handler);
      el.classList.remove(className);
      onEnd?.(el);
      remove.call(el);
    });
  };
}

export { fadeOut };
