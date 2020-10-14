import React from 'react';
import styled from 'styled-components';
import DAG from './Graph/DAG';
import pixelizeInteger from './lib/helpers/pixelizeInteger';
import { ModuleProps, ReactVxDagProps } from './types/module';


const Container = styled.svg`
  ${ (props: ModuleProps) => cssContainer(props) }
`

const cssContainer = ({ width, height, backgroundColor } : ModuleProps): string => `
  width: ${pixelizeInteger(width)};
  height: ${pixelizeInteger(height)};
  background-color: ${backgroundColor};
`

const ReactVxDag: React.FC<ReactVxDagProps> = ({ width, height, backgroundColor, nodes, edges, zoomable = false, draggable = false}) => (
  <Container width={width} height={height} backgroundColor={backgroundColor}>
    <DAG nodes={nodes} edges={edges} zoomable={zoomable} draggable={draggable} />
  </Container>
);

export default ReactVxDag;
