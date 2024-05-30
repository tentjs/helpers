import type { FormEvent } from "./types";

/**
 * Bind a HTML input value to the state object.
 *
 * @param state The state object.
 * @param key The key to search for in the state object. If the key is nested, use a dot to separate the keys.
 *
 * ```ts
 * bind(state, 'username')
 * bind(state, 'some.nested.key')
 * ```
 */
function bind(state: object, key: string) {
  return (input: FormEvent) => {
    if (key.includes(".")) {
      const parts = key.split(".");
      let t = state;

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (parts.length - 1 === i) {
          t[part] = input.target.value;
        }
        t = t[part];
      }

      return;
    }

    state[key] = input.target.value;
  };
}

export { bind };
