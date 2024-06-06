import type { TentNode } from "@tentjs/tent";

type Options = {
  onStart?: (el: TentNode) => void;
  onEnd?: (el: TentNode) => void;
};

export type { Options };
