import React from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import styled from 'styled-components';

const StyledBar = styled(Bar)`
  stroke: black;
  stroke-width: 2px;
  fill: white;
`;

interface DefaultNodeProps {
  text: string;
  width: number;
  height: number;
  padding: number;
}

const DefaultNode: React.FC<DefaultNodeProps> = ({ text, width, height, padding }) => (
  <Group top={height / 2} left={width / 2}>
    <StyledBar x={-width / 2} y={-height / 2} width={width} height={height} />
    <text dy=".33em" fontSize={9} fontFamily="Arial" textAnchor="middle" fill="black">
      {text}
    </text>
  </Group>
);

export default DefaultNode;
