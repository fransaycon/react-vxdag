import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactVxDag from '../src';
import { Node, Edge } from '../src/types/graph';

const Sample = () => {
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
  ]);
  const [edges] = useState<Edge[]>([
    { source: 'A', target: 'B' },
    { source: 'A', target: 'C' },
    { source: 'A', target: 'D' },
  ]);

  return <ReactVxDag nodes={nodes} edges={edges} width="100vw" height="100vh" backgroundColor="e2e2e2" />
}

ReactDOM.render(<Sample />, document.getElementById('main'));
