import styled from 'styled-components';
import {
  CenterAlignedColumnContainer,
  RowContainer
} from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const DisplayQuoteContiner = styled(CenterAlignedColumnContainer)`
  opacity: ${props => (props.showModal ? 0.6 : 1)};
  margin: 0;
`;

export const DisplayQuoteMainContainer = styled(CenterAlignedColumnContainer)`
  position: relative;
  height: ${props => props.quoteMainContainerHeight};
  min-height: '100vh';
  margin-top: 0px;
  justify-content: flex-start;
  width: 98%;
  padding-bottom: 2rem;
`;

export const DisplayQuoteButtonContainer = styled(RowContainer)`
  width: 70%;
  margin-top: 0.5rem;
  justify-content: space-between;
`;
