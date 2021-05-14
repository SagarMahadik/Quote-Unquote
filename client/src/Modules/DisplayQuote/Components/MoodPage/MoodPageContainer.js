import styled from 'styled-components/macro';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

export const MoodPageContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  min-height: 100vh;
  justify-content: flex-start;
  overflow-y: auto;
  @media (min-width: 786px) {
    margin-top: ${props => (props.isGuestUser ? '3rem' : '0rem')};
  }
`;
