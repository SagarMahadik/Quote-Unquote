import { MotionDiv } from './rootStyles';
import styled from 'styled-components';

export const Container = styled(MotionDiv)`
  width: ${props => props.width};
  height: ${props => props.height};
  max-width: ${props => props.maxWidth};
  min-height: ${props => props.minHeight};
  background: ${props => props.background};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  box-shadow: ${props => props.boxShadow};
  border: ${props => props.border};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  display: ${props => props.display};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  justify-items: ${props => props.justifyItems};
  align-content: ${props => props.alignContent};
  z-index: ${props => props.zIndex};
`;

export const FlexContainer = styled(Container)`
  display: flex;
`;

export const FlexColumnContainer = styled(FlexContainer)`
  flex-direction: column;
`;

export const FlexRowContainer = styled(FlexContainer)`
  flex-direction: row;
`;

export const CenterAlignedColumnContainer = styled(FlexColumnContainer)`
  align-items: center;
  justify-content: center;
`;

export const CenterAlignedFlexStartColumnContainer = styled(
  FlexColumnContainer
)`
  align-items: center;
  justify-content: flex-start;
`;

export const WrappedRowContainer = styled(FlexRowContainer)`
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const SpaceBetweenRowContainer = styled(FlexRowContainer)`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
