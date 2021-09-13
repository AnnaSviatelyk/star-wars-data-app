import React, { useCallback } from 'react';
import styled from 'styled-components';

const ScrollToTopButton = ({ ref }) => {
  const handleScrollToTop = useCallback(() => {
    if (ref && ref.current) {
      ref.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [ref]);

  return (
    <Container onClick={handleScrollToTop} type="button">
      Scroll to top ↑
    </Container>
  );
};

const Container = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  font-family: 'SfDistantGalaxy';
  font-size: 16px;
  color: white;
`;

export default ScrollToTopButton;
