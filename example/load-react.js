import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactVxDag from '../src';

const Sample = () => {
  const [nodes] = useState([
    {
      id: 'A',
      data: {
        label: 'DATA_A',
      },
    },
    {
      id: 'B',
      data: {
        label: 'DATA_B',
      },
    },
    {
      id: 'C',
      data: {
        label: 'DATA_C',
      },
    },
    {
      id: 'D',
      data: {
        label: 'DATA_D',
      },
    },
    {
      id: 'E',
      data: {
        label: 'DATA_E'
      }
    }
  ]);
  const [edges] = useState([
    { source: 'A', target: 'B' },
    { source: 'A', target: 'C' },
    { source: 'A', target: 'D' },
    { source: 'B', target: 'E' },
    { source: 'C', target: 'E' },
    { source: 'D', target: 'E' },
  ]);

  return <ReactVxDag nodes={nodes} edges={edges} width="100vw" height="100vh" backgroundColor="e2e2e2" padding={20} />
}

ReactDOM.render(<Sample />, document.getElementById('main'));
