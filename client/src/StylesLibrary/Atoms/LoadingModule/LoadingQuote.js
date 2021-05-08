import styled from 'styled-components/macro';
import {
  RowContainer,
  CenterAlignedColumnContainerWithShadowBackground,
  CenterAlignedColumnContainer
} from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const QuoteLoadingContainer = styled(CenterAlignedColumnContainer)`
  align-items: flex-start;
  width: 80%;
  height: 200px;
`;

export const QuoteLoadingLine = styled(CenterAlignedColumnContainer)`
  width: 90%;
  height: 30px;
  background-color: #dfdfdf;
  opacity: 40%;
  margin: 4px;
`;
