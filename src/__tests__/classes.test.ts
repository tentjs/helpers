import { classes } from "../classes";

describe("classes", () => {
  it("concatenates and filters out falsey values", () => {
    expect(classes("class1", false && "class2", "class3")).toBe(
      "class1 class3",
    );
  });
});
