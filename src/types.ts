type FormEvent<T = HTMLInputElement> = Event & {
  target: T;
};

export type { FormEvent };
