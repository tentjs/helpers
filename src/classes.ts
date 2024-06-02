/**
 * This is a helper function to concatenate classes together. It's
 * useful when you want to conditionally add classes to an element.
 *
 * @param {array} classes - The classes to combine.
 *
 * @example
 * ```ts
 * classes("class1", false && "class2", "class3"); // => "class1 class3"
 * ```
 */
function classes(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export { classes };
