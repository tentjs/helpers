import { mount, type Component } from "@tentjs/tent";

/**
 * Mount multiple components to their respective targets.
 *
 * @param {Components} components - A record of components and their targets.
 *
 * @example
 * ```ts
 * const components: Components = {
 *   "#component-1": Component1,
 *   ".component-2": Component2,
 *   "#component-3": Component3,
 * };
 *
 * mountAll(components);
 * ```
 */
function mountAll(components: Components): void {
  for (const key in components) {
    const Component = components[key];
    const target = document.querySelector(key);

    mount(target, Component);
  }
}

type Components = Record<Target, Component>;
type Target = string;

export { mountAll };
