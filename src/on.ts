/**
 * Call a function based on a KeyboardEvent.
 *
 * Each key should be the exact key of the KeyboardEvent. For example, "Enter", "Escape", etc.
 *
 * @param {OnEvents} events Key-value pairs of key and function to call.
 *
 * @example
 * ```ts
 * on({
 *   Enter: () => console.log("Enter pressed"),
 *   Escape: () => console.log("Escape pressed"),
 * }),
 * ```
 */
function on(events: OnEvents) {
  return (e: KeyboardEvent) => {
    if (events[e.key]) events[e.key](e);
  };
}

type OnEvents = Record<KeyboardEvent["key"], (e: KeyboardEvent) => void>;

export { on, type OnEvents };
