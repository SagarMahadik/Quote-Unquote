import styled from 'styled-components';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const DisplayQuoteContiner = styled(CenterAlignedColumnContainer)`
  opacity: ${props => (props.showModal ? 0.6 : 1)};
`;

export const DisplayQuoteMainContainer = styled(CenterAlignedColumnContainer)`
  position: relative;
`;
