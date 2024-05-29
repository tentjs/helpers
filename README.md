# 💁🏻 Helpers

Functions and types that ease writing [⛺ Tent](https://github.com/tentjs/tent) components.

## ⚡ Included

- `bind` - Bind an Input element value to a state property
- `FormEvent<T>` - A generic type for form events

## 📦 Installation

```sh
npm install @tentjs/helpers
```

## 👀 Examples

### `bind`

```typescript
import { type Component, tags } from "@tentjs/tent";
import { bind } from "@tentjs/helpers";

type State = { name: string; details: { age: number } };

const MyComponent: Component<State> = {
  state: { name: "", details: { age: 0 } },
  view: ({ state }) => {
    return tags.input("", {
      // Bind the input value to the state property `name`
      oninput: bind(state, "name"),
      // or, for nested properties:
      // oninput: bind(state, "details.age"),
    });
  },
};
```
