import dagre from 'dagre';
import { Edge, Node } from '../types';

const createGraph = (nodes: Node[], edges: Edge[]): dagre.graphlib.Graph => {
  const graph = new dagre.graphlib.Graph({ directed: true });

  graph.setGraph({});

  graph.graph().rankdir = 'LR';
  graph.graph().ranksep = 50;
  graph.graph().nodesep = 5;

  graph.setDefaultEdgeLabel(() => ({}));

  nodes.forEach(node => {
    graph.setNode(node.id, {
      label: node.id,
      width: 50,
      height: 20,
    });
  });

  edges.forEach(edge => {
    graph.setEdge(edge.source, edge.target);
  });

  return graph;
};

export default createGraph;
