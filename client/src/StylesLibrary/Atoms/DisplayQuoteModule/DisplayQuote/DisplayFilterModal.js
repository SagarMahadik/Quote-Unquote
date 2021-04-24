import styled from 'styled-components';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const ModalWrapper = styled(CenterAlignedColumnContainer)`
  width: 94%;
  margin: 0;
  height: 400px;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  justify-content: flex-start;
  height: ${props => props.containerHeight};
  width: 92%;
  margin-top: -300px;
`;
