import { type Children, tags } from "@tentjs/tent";

type Options = {
  /**
   * The tag to use for the parent element.
   * @type {string}
   * @default "div"
   */
  tag?: string;
};

/**
 * Keep the children of an element after first render.
 *
 * @param {Children} children - The children to keep.
 * @param {Options} [options] - The options for the keep.
 *
 * @example
 * ```ts
 * return keep([
 *   h1("Hello, world!"),
 * ]);
 * ```
 */
function keep(children: Children, options: Options = {}) {
  const { tag = "div" } = options;

  return tags[tag](children, { keep: true });
}

export { keep };
