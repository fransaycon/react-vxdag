import { Group } from '@visx/group';
import React from 'react'
import DagEdge from '../Edge/DagEdge';
import DagNode from '../Node/DagNode';
import { DagGraph, DagPoint } from '../types/graph';

const generateKey = (source: DagPoint, target: DagPoint): string => `
  ${source.x}_${source.y}_${target.x}_${target.y}
`

const DagProper: React.FC<DagGraph> = ({ nodes, edges }) => (
  <Group>
    {
      nodes.map(({x, y, width, height, id, data}) => 
        <DagNode key={id} x={x} y={y} width={width} height={height} id={id} data={data} />
      )
    }
    {
      edges.map(({ points, source, target }) => 
        <DagEdge key={generateKey(source, target)} points={points} source={source} target={target} />
      )
    }
  </Group>
)

export default DagProper;
