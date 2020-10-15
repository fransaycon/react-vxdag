import React from 'react';
import styled from 'styled-components';
import Dag from './Graph/Dag';
import pixelizeInteger from './lib/pixelizeInteger';
import { ModuleProps, ReactVxDagProps } from './types/module';

const Container = styled.svg`
  ${ (props: ModuleProps) => cssContainer(props) }
`

const cssContainer = ({ width, height, backgroundColor, padding } : ModuleProps): string => `
  width: ${pixelizeInteger(width)};
  height: ${pixelizeInteger(height)};
  background-color: ${backgroundColor};
  padding: ${padding};
`

const ReactVxDag: React.FC<ReactVxDagProps> = ({
  backgroundColor,
  edges,
  height,
  nodes,
  padding,
  width,
  draggable = false,
  zoomable = false,
}) => (
  <Container
    backgroundColor={backgroundColor}
    height={height}
    padding={padding}
    width={width}
  >
    <Dag nodes={nodes} edges={edges} zoomable={zoomable} draggable={draggable} />
  </Container>
);

export default ReactVxDag;
