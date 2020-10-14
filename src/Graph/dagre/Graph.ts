import dagre from 'dagre';
import { Graph as VisxGraph } from '@visx/network/lib/types'
import { Edge, Node, Options, ProcessedNode } from '../../types/graph';
import { Link } from '@visx/network/lib/types';
import GraphAbstract from '../GraphAbstract';

class Graph extends GraphAbstract<dagre.graphlib.Graph, VisxGraph<Link<ProcessedNode>, ProcessedNode>> {
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
        label,
      };
    });

    const processedEdges = this.graph.edges().map(e => {
      const sourceData = this.graph.node(e.v);
      const targetData = this.graph.node(e.w);
      return {
        source: {
          x: sourceData.x,
          y: sourceData.y,
          width: sourceData.width,
          height: sourceData.height,
          label: sourceData.label,
        },
        target: {
          x: targetData.x,
          y: targetData.y,
          width: targetData.width,
          height: targetData.height,
          label: targetData.label,
        },
      };
    });

    return {
      nodes: processedNodes,
      links: processedEdges,
    };
  }
}

export default Graph
