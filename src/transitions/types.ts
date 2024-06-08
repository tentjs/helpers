import type { Attrs, TentNode } from "@tentjs/tent";

type Options<A extends Attrs> = {
  onStart?: (el: TentNode<A>) => void;
  onEnd?: (el: TentNode<A>) => void;
};

export type { Options };
