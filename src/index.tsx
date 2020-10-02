import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: blue;
  color: white;
  width: 500px;
  height: 200px;
`;

const Sample: React.FC = () => (
  <Container>
    <h1>Hello World</h1>
  </Container>
);

export default Sample;
