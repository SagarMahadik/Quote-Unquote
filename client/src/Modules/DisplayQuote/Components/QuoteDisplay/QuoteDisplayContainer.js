import styled from 'styled-components/macro';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

export const QuotePageContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  position: relative;
  @media (min-width: 786px) {
    margin-top: '3rem';
  }
`;
