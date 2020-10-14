export interface Node<T = {}> {
  id: string;
  data?: T;
}

export interface ProcessedNode {
  x: number;
  y: number;
  label: string | undefined;
  width: number;
  height: number;
}

export interface Edge {
  source: string;
  target: string;
}

export interface NodeOptions {
  width: number;
  height: number;
}

export interface DagreGraphOptions {
  directed?: boolean;
  multigraph?: boolean;
  compound?: boolean;
}

export interface GraphOptions {
  graphOrientation: 'LR' | 'RL' | 'BT';
  columnSpaceWidth: number;
  rowSpaceWidth: number;
}

export interface Options {
  graph: GraphOptions;
  node?: NodeOptions;
  dagreOpts?: DagreGraphOptions;
}
