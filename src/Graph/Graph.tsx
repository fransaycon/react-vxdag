import React, { useState } from 'react';
import { DefaultLink, Graph as VisxGraph } from '@visx/network';
import { Edge, Node } from '../types/graph';
import Graph from '../lib/dagre/Graph';
import DefaultNode from '../Node/DefaultNode';

const DAG: React.FC = () => {
  const [nodes] = useState<Node[]>([
    {
      id: 'A',
      data: {},
    },
    {
      id: 'B',
      data: {},
    },
    {
      id: 'C',
      data: {},
    },
    {
      id: 'D',
      data: {},
    },
  ])
  const [edges] = useState<Edge[]>(
    [
      { source: 'A', target: 'B' },
      { source: 'A', target: 'C' },
      { source: 'A', target: 'D' },
    ]
  );

  const graph = new Graph(nodes, edges);
  graph.initialize()
  const processedGraph = graph.getProcessedGraph()
  console.log(processedGraph)

  return <VisxGraph nodeComponent={DefaultNode} linkComponent={DefaultLink} graph={processedGraph} />;
};

export default DAG;
