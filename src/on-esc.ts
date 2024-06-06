type Options = {
  /**
   * Removes the event listener after the handler is executed.
   * Set this to `true` if you remove the dependent element from the DOM to avoid memory leaks.
   */
  cleanup?: boolean;
};

/**
 * Listens for the `Escape` key press on the `document` and executes a handler function.
 *
 * @param {function} fn - The event handler.
 * @param {Options} options
 *
 * @example
 * ```ts
 * onEsc((e) => console.log("Escape key pressed", e));
 * ```
 */
function onEsc(fn: (e: KeyboardEvent) => void, options?: Options) {
  function handler(e: KeyboardEvent) {
    if (e.key === "Escape") {
      fn(e);
      if (options?.cleanup) {
        document.removeEventListener("keydown", handler);
      }
    }
  }

  document.addEventListener("keydown", handler);
}

export { onEsc };