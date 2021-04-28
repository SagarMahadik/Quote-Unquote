import styled from 'styled-components';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const DisplayQuoteContiner = styled(CenterAlignedColumnContainer)`
  opacity: ${props => (props.showModal ? 0.6 : 1)};
`;

export const DisplayQuoteMainContainer = styled(CenterAlignedColumnContainer)`
  position: relative;
  height: 100vh;
  background-image: radial-gradient(
    154% 68.86% at 132.29% 66.46%,
    rgba(98, 217, 227, 0.64) 0%,
    #e7eaef 87.61%
  );
`;
