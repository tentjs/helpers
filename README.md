# 💁🏻 Helpers

This is a collection of utility functions and types that can be used to simplify common tasks in ⛺ [Tent](https://github.com/tentjs/tent).

## ⚡ Included

- `bind` - Bind an Input element value to a state property
- `classes` - Generate a class string from multiple class names
- `on` - Easier event handling based on key codes
- `ternary` - Simplified conditional rendering
- `fadeIn` - Fade in an element with CSS animations
- `fadeOut` - Fade out an element with CSS animations
- `fadeInOut` - A combination of `fadeIn` and `fadeOut`
- `FormEvent<T>` - A generic type for form events

## 📦 Installation

```sh
npm install @tentjs/helpers
# or with JSR
npx jsr add @tentjs/helpers
```

## 👀 Examples

### `bind`

```ts
import { type Component, tags } from "@tentjs/tent";
import { bind } from "@tentjs/helpers";

type State = { name: string; details: { age: number } };

const MyComponent: Component<State> = {
  state: { name: "", details: { age: 0 } },
  view: ({ state }) =>
    tags.input("", {
      // Bind the input value to the state property `name`
      oninput: bind(state, "name"),
      // or, for nested properties:
      // bind(state, "details.age"),
    }),
};
```

### `FormEvent<T>`

```ts
import { tags } from "@tentjs/tent";
import { type FormEvent } from "@tentjs/helpers";

tags.input("", {
  oninput: (event: FormEvent<HTMLInputElement>) => {
    // event.target is typed as `HTMLInputElement`
    state.name = event.target.value;
  },
});
```

### `classes`

```ts
import { tags } from "@tentjs/tent";
import { classes } from "@tentjs/helpers";

tags.div("", {
  className: classes("container", 2 > 3 && "some-class"),
});
```

### `on`

```ts
import { tags } from "@tentjs/tent";
import { on } from "@tentjs/helpers";

tags.input("", {
  onkeydown: on({
    Enter: () => console.log("Enter pressed"),
    Escape: () => console.log("Escape pressed"),
  }),
});
```

### `ternary`

```ts
import { tags } from "@tentjs/tent";
import { ternary } from "@tentjs/helpers";

const MyComponent = {
  view: () =>
    tags.div(
      ternary(3 > 2, "3 is greater than 2", "3 is not greater than 2"),
      // => "3 is greater than 2"
    ),
};
```
