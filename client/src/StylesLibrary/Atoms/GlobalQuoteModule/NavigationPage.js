import styled from 'styled-components';
import { CenterAlignedColumnContainer } from './ContainerStyles';

export const NavigationPageContainer = styled(CenterAlignedColumnContainer)`
  height: 100vh;
  margin: 0;
  justify-content: ${props => props.justifyContent};
`;
