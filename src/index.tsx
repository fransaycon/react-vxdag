import React from 'react';
import styled from 'styled-components';
import DAG from './Graph/Graph';

const Container = styled.svg`
  width: 100vw;
  height: 100vh;
  background-color: #e2e2e2;
`;

const Sample: React.FC = () => (
  <Container>
    <DAG />
  </Container>
);

export default Sample;
