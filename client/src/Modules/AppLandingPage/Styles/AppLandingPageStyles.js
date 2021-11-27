import styled from 'styled-components';
import { CenterAlignedFlexStartColumnContainer } from 'BennyStyleLibrary/Global/containerStyles';
import {
  SpaceBetweenRowContainer,
  CenterAlignedColumnContainer
} from './../../../BennyStyleLibrary/Global/containerStyles';
import { MotionImage } from './../../../BennyStyleLibrary/Global/rootStyles';

const imageWrapperStyles = {
  imageWidth: '100px',
  imageHeight: '145px',
  imageBorderRadius: '388px'
};

const { imageWidth, imageHeight, imageBorderRadius } = imageWrapperStyles;

export const AppLandingPageContainer = styled(
  CenterAlignedFlexStartColumnContainer
)`
  width: 100%;

  background-color: black;
  height: 100%;
  min-height: 100vh;
`;

export const QuQLogoContainer = styled(CenterAlignedFlexStartColumnContainer)`
  width: 157px;
  height: 228px;
  margin-top: 80px;
`;

export const LandingPageAuthorImageRow = styled(SpaceBetweenRowContainer)``;

export const LandingPageAuthorImage = styled(MotionImage)`
  width: ${imageWidth};
  height: ${imageHeight};
  border-radius: ${imageBorderRadius};
  object-fit: cover;
  filter: grayscale(100%);
`;

export const LandingPageAuthorImageWrapper = styled(
  CenterAlignedFlexStartColumnContainer
)`
  width: ${imageWidth};
  height: ${imageHeight};
  border-radius: ${imageBorderRadius};
  padding: 4px;
`;

export const LandingPageEntryButtonContainer = styled(
  CenterAlignedColumnContainer
)`
  width: 89px;
  height: 89px;
  position: absolute;
  top: 85%;
  z-index: 3;
`;
