import styled from 'styled-components';
import {
  CenterAlignedFlexStartColumnContainer,
  RowGridContainer,
  CenterAlignedColumnContainer
} from 'BennyStyleLibrary/Global/containerStyles';
import { Text } from 'BennyStyleLibrary/Global/rootStyles';
import {
  WrappedRowContainer,
  OverflowScrollContainer
} from './../../../../../BennyStyleLibrary/Global/containerStyles';
import { MotionImage } from './../../../../../BennyStyleLibrary/Global/rootStyles';

export const MoodPageContainer = styled(CenterAlignedFlexStartColumnContainer)`
  width: 100%;
  height: auto;
  min-height: 100vh;
  border-top-left-radius: ${props => (props.displayInDrawer ? '25px' : 'none')};
  border-top-right-radius: ${props =>
    props.displayInDrawer ? '25px' : 'none'};
`;

export const MoodPageHeader = styled(Text)`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: #ffffff;
  margin-top: 1.5rem;
`;

export const MoodPageSectionHeader = styled(Text)`
  font-family: 'Noto Sans';
  font-size: 22px;
  margin-top: 24px;
  color: #ffffff;
`;

export const MoodPageSectionContainer = styled(WrappedRowContainer)`
  width: 90%;
  max-width: 800px;
  height: ${props => (props.height ? props.height : 'auto')};
  overflow-y: scroll;
  background: rgba(231, 234, 239, 0.19);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const MoodPageTagContainer = styled(MoodPageSectionContainer)``;

export const MoodPageAuthorContainer = styled(MoodPageSectionContainer)``;

export const MoodPageButtonWrapper = styled(
  CenterAlignedFlexStartColumnContainer
)`
  width: 94px;
  height: 94px;
  background: ${props =>
    props.selected ? 'rgba(255, 255, 255, 0.2)' : 'none'};
  border: ${props =>
    props.selected ? '2px solid #ffffff' : '2px solid rgba(255,255,255,0)'};
  border-radius: 12px;
  margin-top: 8px;
  padding: 4px;
  transition: all 0.5s ease-out;
`;

export const MoodPageTagButtonWrapper = styled(MoodPageButtonWrapper)``;

export const MoodPageButtonText = styled(Text)`
  font-family: 'Noto Sans';
  font-size: 14px;
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.8);
`;

export const MoodPageSkeletonButton = styled(MoodPageButtonWrapper)`
  height: 90px;
  width: 90px;
  background: rgba(255, 255, 255, 0.2);
  margin-left: 8px;
`;

export const MoodPageTagButtonSVG = styled(MotionImage)`
  width: 70px;
  height: 70px;
  min-height: 70px;
  object-fit: contain;
`;

export const MoodPageAuthorButtonWrapper = styled(MoodPageButtonWrapper)`
  height: 128px;
  position: relative;
`;

export const MoodPageAuthorButtonImage = styled(MotionImage)`
  width: 70px;
  height: 70px;
  min-height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 8px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid #ffffff;
  filter: grayscale(100%);
`;

export const MoodPageAuthorButtonText = styled(MoodPageButtonText)`
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const MoodPageTagButtonText = styled(MoodPageButtonText)``;

export const MoodPageTab = styled(CenterAlignedColumnContainer)`
  width: 47%;
  height: 30px;
  background: ${props => (props.selected ? 'rgba(255,255,255,0.3)' : 'none')};
  border: 2px solid rgb(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition: all 0.5s ease-out;
`;

export const MoodPageFilterScrollContainer = styled(OverflowScrollContainer)`
  margin-top: 16px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 99%;
  border-right: none;
  border-left: none;
`;

export const MoodPageSelectedItemContainer = styled(RowGridContainer)`
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.87);
  height: 30px;
  grid-template-columns: 3fr 20px;
  justify-items: start;
  margin-left: 12px;
  column-gap: 10px;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
`;

export const MoodPageSelectedItemText = styled(Text)`
  font-family: 'Noto Sans';
  font-size: 12px;
  height: 15px;
  padding-left: 4px;
  padding-right: 4px;
  color: rgba(255, 255, 255, 0.9);
`;

export const MoodPageSelectedItemIconContainer = styled(
  CenterAlignedColumnContainer
)`
  width: 50px;
  height: 50px;
`;

export const MoodPageAuthorTagContainer = styled(CenterAlignedColumnContainer)`
  background: rgba(255, 255, 255, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.46);
  box-sizing: border-box;
  border-radius: 5px;
  width: auto;
  height: 14px;
  padding-left: 4px;
  padding-right: 4px;
  position: absolute;
  top: 74%;
  margin-top: -12px;
  opacity: ${props => (props.tagPresent ? '1' : '0')};
`;

export const MoodPageAuthorTagText = styled(Text)`
  font-family: Noto Sans;
  font-style: normal;
  font-size: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
`;
