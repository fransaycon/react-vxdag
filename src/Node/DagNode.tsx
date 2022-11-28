import React from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import styled from 'styled-components';
import { DagNode as DagNodeProps } from '../types/graph';

const StyledBar = styled(Bar)`
  stroke: black;
  stroke-width: 2px;
  fill: white;
`;

const DagNode: React.FC<DagNodeProps> = ({ x, y, width, height, id }) => (
  <Group top={y} left={x}>
    <StyledBar x={-width/2} y={-height/2} width={width} height={height} />
    <text dy=".33em" fontSize={9} fontFamily="Arial" textAnchor="middle" fill="black">
      {id}
    </text>
  </Group>
);

export default DagNode;
