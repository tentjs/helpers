import { mount, type Component } from "@tentjs/tent";

/**
 * Mount multiple components to their respective targets.
 *
 * @param {Components} components - A record of components and their targets.
 *
 * @example
 * ```ts
 * mountAll([
 *   { target: ".target-1", component: Example1 },
 *   { target: ".target-2", component: Example2 },
 *   { target: ".target-3", component: Example3 },
 * ]);
 * ```
 */
function mountAll(components: ComponentConfig[]): void {
  for (let i = 0; i < components.length; i++) {
    const { target, component } = components[i];
    const targetElement = document.querySelector(target);

    mount(targetElement, component);
  }
}

type Components = Record<Target, Component>;
type ComponentConfig = {
  target: Target;
  component: Component;
};
type Target = string;

export { mountAll };
