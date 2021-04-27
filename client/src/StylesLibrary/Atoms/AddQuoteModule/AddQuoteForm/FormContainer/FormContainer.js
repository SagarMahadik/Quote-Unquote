import styled from 'styled-components';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const FormContentContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  justify-content: flex-start;
  height: ${props => props.containerHeight};
  width: 100%;
`;
