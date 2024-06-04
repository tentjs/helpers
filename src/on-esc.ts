type Options = {
  /**
   * If `true`, the event listener will be removed after the event handler is called.
   * Remember to set this to `true`, if you remove elements from the DOM, to avoid memory leaks.
   */
  cleanup?: boolean;
};

/**
 * Listens for the `Escape` key press on the `document` and executes a handler function.
 *
 * This is used for closing modals, dialogs, etc.. If you are listening on a specific input element,
 * you should use the `keydown` event listener directly on that element.
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
  const handler = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      fn(e);
      if (options?.cleanup) {
        document.removeEventListener("keydown", handler);
      }
    }
  };

  document.addEventListener("keydown", handler);

  return handler;
}

export { onEsc };
