import React from 'react';
import { Graph as Network, DefaultLink } from '@visx/network';
import { Graph, Link } from '@visx/network/lib/types';
import { Node } from './types';
import DefaultNode from '../Node/DefaultNode';

const nodes: Node[] = [
  {
    x: 150,
    y: 150,
    id: 'A',
  },
  {
    x: 150,
    y: 300,
    id: 'B',
  },
  {
    x: 250,
    y: 500,
    id: 'C',
  },
];

const links: Link<Node>[] = [
  { source: nodes[0], target: nodes[1] },
  { source: nodes[1], target: nodes[2] },
];

const graph: Graph<Link<Node>, Node> = {
  links,
  nodes,
};

const DAG: React.FC = () => <Network graph={graph} linkComponent={DefaultLink} nodeComponent={DefaultNode} />;

export default DAG;
