export interface Node<T = {}> {
  id: string;
  data?: T;
}
export interface DagPoint {
  x: number;
  y: number;
}

export interface DagNode<T = {}> extends DagPoint {
  id: string | undefined;
  width: number;
  height: number;
  data?: T | undefined;
}

export interface DagEdge {
  points?: DagPoint[];
  source: DagPoint;
  target: DagPoint;
}

export interface DagGraph<T = {}> {
  nodes: DagNode<T>[];
  edges: DagEdge[];
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
