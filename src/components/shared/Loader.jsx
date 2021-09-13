import React from 'react';
import styled from 'styled-components';

import DarthVaderIcon from '../../assets/darth_vader.svg';

const Loader = () => {
  return (
    <Container>
      <LoaderContainer>
        <img src={DarthVaderIcon} alt="darth wader loader" />
      </LoaderContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoaderContainer = styled.div`
  width: 64px;
  height: 64px;
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
