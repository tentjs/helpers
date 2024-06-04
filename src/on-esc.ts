type Options = {
  cleanup?: boolean;
};

/**
 * Listens for the `Escape` key press on the `document` and executes a function.
 *
 * This is used for closing modals, dialogs, etc.. If you are listening on a specific element,
 * you should use the `keydown` event listener directly on that element.
 *
 * Remember to set the `cleanup` parameter to `true`, if you use this function to close a modals, dialogs, etc., to avoid memory leaks.
 *
 * @param {function} fn - The function to execute.
 * @param {boolean} cleanup - Whether to remove the event listener after the function has been executed.
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
