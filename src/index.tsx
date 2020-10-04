import React from 'react';
import styled from 'styled-components';
import DefaultNode from './Node/DefaultNode';

const Container = styled.svg`
  width: 100vw;
  height: 100vh;
  background-color: #e2e2e2;
`;

const Sample: React.FC = () => (
  <Container>
    <DefaultNode text={'Hello World'} height={200} width={200} padding={20} />
  </Container>
);

export default Sample;
