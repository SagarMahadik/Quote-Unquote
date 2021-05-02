import styled from 'styled-components';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const DisplayQuoteContiner = styled(CenterAlignedColumnContainer)`
  opacity: ${props => (props.showModal ? 0.6 : 1)};
  margin: 0;
`;

export const DisplayQuoteMainContainer = styled(CenterAlignedColumnContainer)`
  position: relative;
  height: 100vh;
  margin-top: 0px;
  justify-content: flex-start;
`;
