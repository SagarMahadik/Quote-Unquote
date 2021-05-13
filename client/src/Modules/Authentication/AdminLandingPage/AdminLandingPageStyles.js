import styled from 'styled-components';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

const AdminLandingPageContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  align-items: flex-start;
  justify-items: center;
  width: 100%;
  padding: 4px;
  margin: 4px;
  height: '100vh';
`;

export { AdminLandingPageContainer };
