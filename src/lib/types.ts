export type Node<T = {}> = {
  id: string;
  data: T;
};

export type ProcessedNode = {
  x: number;
  y: number;
  label: string | undefined;
  width: number;
  height: number;
};

export interface Edge {
  source: string;
  target: string;
}
