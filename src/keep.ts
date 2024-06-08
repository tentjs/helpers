import {
  tags,
  type Children,
  type TagAttrs,
  type TentNode,
} from "@tentjs/tent";

type Options = {
  /**
   * The tag to use for the parent element.
   * @type {string}
   * @default "div"
   */
  tag?: string;
};

type Attributes = Options & TagAttrs;

/**
 * Keep the children of an element after first render.
 *
 * @param {Children} children - The children to keep.
 * @param {Attributes} [attrs] - The attributes for the element.
 *
 * @example
 * ```ts
 * keep([
 *   h1("Hello, world!"),
 * ], { className: "example", tag: "span" });
 * ```
 */
function keep(children: Children, attrs: Attributes = {}): TentNode {
  const { tag = "div", ...rest } = attrs;

  return tags[tag](children, { keep: true, ...rest });
}

export { keep };
