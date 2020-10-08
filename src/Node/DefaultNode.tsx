import React from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import styled from 'styled-components';
import { NodeProvidedProps } from '@visx/network/lib/types';
import { Node } from '../Graph/types';

const StyledBar = styled(Bar)`
  stroke: black;
  stroke-width: 2px;
  fill: white;
`;

const DefaultNode: React.FC<NodeProvidedProps<Node>> = ({ node }) => {
  const { id } = node;
  const width = 50;
  const height = 50;

  return (
    <Group top={0} left={0}>
      <StyledBar x={-width / 2} y={-height / 2} width={width} height={height} />
      <text dy=".33em" fontSize={9} fontFamily="Arial" textAnchor="middle" fill="black">
        {id}
      </text>
    </Group>
  );
};

export default DefaultNode;
