import dagre from 'dagre';
import { DagGraph, Edge, Node, Options } from '../../types/graph';
import GraphAbstract from '../GraphAbstract';

class DagreGraph extends GraphAbstract<dagre.graphlib.Graph, DagGraph> {
  private graphOptions: Options;

  constructor(nodes: Node[], edges: Edge[], graphOptions: Options = {
    graph: {
      graphOrientation: 'LR',
      columnSpaceWidth: 50,
      rowSpaceWidth: 25,
    },
    node: {
      width: 50,
      height: 20,
    },
    dagreOpts: {
      directed: true,
    },
  }) {
    super(nodes, edges, new dagre.graphlib.Graph(graphOptions.dagreOpts));
    this.graphOptions = graphOptions;
  }

  public initialize() {
    this.graph.setGraph({
      rankdir: this.graphOptions.graph.graphOrientation,
      ranksep: this.graphOptions.graph.columnSpaceWidth,
      nodesep: this.graphOptions.graph.rowSpaceWidth,
    });
    this.graph.setDefaultEdgeLabel(() => ({}));
  
    this.nodes.forEach(node => {
      this.graph.setNode(node.id, {
        label: node.id,
        ...this.graphOptions.node,
      });
    });
  
    this.edges.forEach(edge => {
      this.graph.setEdge(edge.source, edge.target);
    });
  }

  public getProcessedGraph() {
    dagre.layout(this.graph);

    const processedNodes = this.graph.nodes().map(n => {
      const { x, y, width, height, label } = this.graph.node(n);
      return {
        x,
        y,
        width,
        height,
        id: label,
      };
    });

    const processedEdges = this.graph.edges().map(e => {
      const sourceData = this.graph.node(e.v);
      const targetData = this.graph.node(e.w);

      return {
        points: this.graph.edge({ v: e.v, w: e.w }).points,
        source: {
          x: sourceData.x,
          y: sourceData.y,
        },
        target: {
          x: targetData.x,
          y: targetData.y,
        },
      };
    });

    return {
      nodes: processedNodes,
      edges: processedEdges,
    };
  }
}

export default DagreGraph
