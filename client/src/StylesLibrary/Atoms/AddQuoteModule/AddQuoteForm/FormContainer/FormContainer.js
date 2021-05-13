import styled from 'styled-components';
import {
  CenterAlignedColumnContainer,
  CenterAlignedColumnContainerWithShadowBackground
} from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const FormContentContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  justify-content: flex-start;
  height: ${props => props.containerHeight};
  min-height: 120vh;
  width: 100%;
  overflow-y: auto;
  padding-bottom: ${props => props.containerPaddingBottom};
`;

export const OverLayContainer = styled(CenterAlignedColumnContainer)`
  background-color: ${props =>
    props.displayOverlay ? 'rgba(0, 0, 0, 0.4)' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.8s ease-out;
  z-index: 101;
`;
