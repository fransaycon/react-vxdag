import React from 'react';
import { DefaultLink, Graph } from '@visx/network';
import { Edge, Node } from '../lib/types';
import createGraph from '../lib/dagre/createGraph';
import DefaultNode from '../Node/DefaultNode';
import processGraph from '../lib/dagre/processGraph';

const nodes: Node[] = [
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
];

const edges: Edge[] = [
  { source: 'A', target: 'B' },
  { source: 'A', target: 'C' },
  { source: 'A', target: 'D' },
];

const DAG: React.FC = () => {
  const graph = processGraph(createGraph(nodes, edges));

  return <Graph nodeComponent={DefaultNode} linkComponent={DefaultLink} graph={graph} />;
};

export default DAG;
