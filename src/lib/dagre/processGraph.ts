import { Graph, Link } from '@visx/network/lib/types';
import dagre from 'dagre';
import { ProcessedNode } from '../types';

const processGraph = (graph: dagre.graphlib.Graph): Graph<Link<ProcessedNode>, ProcessedNode> => {
  dagre.layout(graph);

  const processedNodes = graph.nodes().map(n => {
    const { x, y, width, height, label } = graph.node(n);
    return {
      x,
      y,
      width,
      height,
      label,
    };
  });

  const processedEdges = graph.edges().map(e => {
    const sourceData = graph.node(e.w);
    const targetData = graph.node(e.w);
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
};

export default processGraph;
