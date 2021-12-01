import styled from 'styled-components';
import { CenterAlignedFlexStartColumnContainer } from 'BennyStyleLibrary/Global/containerStyles';
import { Text } from 'BennyStyleLibrary/Global/rootStyles';
import { WrappedRowContainer } from './../../../../../BennyStyleLibrary/Global/containerStyles';
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
  height: 30vh;
  margin-top: 20px;
  overflow-y: scroll;
  background: rgba(231, 234, 239, 0.19);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  padding: 4px;
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
  margin-top: 8px;
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
  height: 120px;
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

export const MoodPageAuthorButtonText = styled(MoodPageButtonText)``;

export const MoodPageTagButtonText = styled(MoodPageButtonText)``;
