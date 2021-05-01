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
  width: 100%;
`;

export const OverLayContainer = styled(CenterAlignedColumnContainer)`
  opacity: ${props => (props.activateOverlay ? 0.4 : 1)};
  transition: opacity 1.2s ease-out;
`;
