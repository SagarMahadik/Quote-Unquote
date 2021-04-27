import styled from 'styled-components';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const ModalWrapper = styled(CenterAlignedColumnContainer)``;

export const ModalContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  justify-content: flex-start;
  width: 92%;
  margin: 0;
  height: 70vh;
  z-index: 10;
  border-radius: 10px;
  position: absolute;
  top: 0;
  margin-top: 5em;
  overflow-y: auto;
`;
