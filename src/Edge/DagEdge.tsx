import React from 'react'
import { LinePath } from '@visx/shape'
import { DagEdge } from '../types/graph'
import { curveBasis } from '@visx/curve'

const DagEdge: React.FC<DagEdge> = ({ points }) => (
  <LinePath 
    curve={curveBasis}
    data={points}
    x={d => d.x}
    y={d => d.y}
    stroke="#333"
    strokeWidth="2"
  />
)

export default DagEdge
