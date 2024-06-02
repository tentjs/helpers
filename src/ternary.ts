import { TentNode } from "@tentjs/tent";

/**
 * This function is a helper to conditionally render a node based on
 * a boolean condition. There is no magic here - it's just a function
 * that wraps the ternary operator.
 *
 * @param {boolean} condition - The condition to check.
 * @param {TentNode | string} truthy - The node to render if the condition is true.
 * @param {TentNode | string} [falsey] - The node to render if the condition is false.
 *
 * @example
 * ```ts
 * ternary(true, "Hello, world!"); // => "Hello, world!"
 * ternary(false, "Truthy", "Falsey"); // => "Falsey"
 * ternary(false, "Truthy"); // => ""
 * ```
 */
function ternary(
  condition: boolean,
  truthy: TentNode | string,
  falsey?: TentNode | string,
) {
  return condition ? truthy : falsey ?? "";
}

export { ternary };
