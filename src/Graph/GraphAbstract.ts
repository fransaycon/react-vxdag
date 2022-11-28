import { Edge, Node } from '../types/graph';

abstract class GraphAbstract<T, Graph> {
  protected graph: T;
  protected nodes: Node[];
  protected edges: Edge[];

  constructor(nodes: Node[], edges: Edge[], graph: T) {
    this.graph = graph;
    this.nodes = nodes;
    this.edges = edges;
  }

  public abstract initialize(): void;
  public abstract getProcessedGraph(): Graph;
}

export default GraphAbstract
