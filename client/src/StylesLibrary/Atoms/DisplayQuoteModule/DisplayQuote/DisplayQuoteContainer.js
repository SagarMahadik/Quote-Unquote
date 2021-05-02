import styled from 'styled-components';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const DisplayQuoteContiner = styled(CenterAlignedColumnContainer)`
  opacity: ${props => (props.showModal ? 0.6 : 1)};
  margin: 0;
`;

export const DisplayQuoteMainContainer = styled(CenterAlignedColumnContainer)`
  position: relative;
  height: ${props => props.quoteMainContainerHeight};
  margin-top: 0px;
  justify-content: flex-start;
  width: 98%;
  padding-bottom: 2rem;
`;
