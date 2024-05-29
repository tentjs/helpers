import { type Component, tags, mount } from "@tentjs/tent";
import { fireEvent, getByTestId, getByText } from "@testing-library/dom";
import { bind } from "../bind";

const { div, input, p } = tags;

beforeEach(() => {
  document.body.innerHTML = "";
});

describe("bind", () => {
  it("binds a simple key", () => {
    const Example: Component<{ username: string }> = {
      state: { username: "" },
      view: ({ state }) =>
        div([
          input("", {
            value: state.username,
            oninput: bind(state, "username"),
            ["data-testid"]: "input",
          }),
          p(`Username: ${state.username}`),
        ]),
    };

    mount(document.body, Example);

    const el = getByTestId<HTMLInputElement>(document.body, "input");

    fireEvent.input(el, { target: { value: "sebkolind" } });

    expect(el.value).toBe("sebkolind");
    expect(getByText(document.body, /Username: sebkolind/)).toBeTruthy();
  });

  it("binds a nested key", () => {
    const Example: Component<{ user: { firstname: string } }> = {
      state: { user: { firstname: "" } },
      view: ({ state }) =>
        div([
          input("", {
            value: state.user.firstname,
            oninput: bind(state, "user.firstname"),
            ["data-testid"]: "input",
          }),
          p(`First name: ${state.user.firstname}`),
        ]),
    };

    mount(document.body, Example);

    const el = getByTestId<HTMLInputElement>(document.body, "input");

    fireEvent.input(el, { target: { value: "Sebastian" } });

    expect(el.value).toBe("Sebastian");
    expect(getByText(document.body, /First name: Sebastian/)).toBeTruthy();
  });
});
