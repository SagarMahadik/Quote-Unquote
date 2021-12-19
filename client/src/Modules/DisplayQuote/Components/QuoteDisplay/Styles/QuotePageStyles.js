import {
  CenterAlignedFlexStartColumnContainer,
  CenterAlignedColumnContainer,
  FlexRowContainer
} from 'BennyStyleLibrary/Global/containerStyles';
import styled from 'styled-components/macro';
import { MotionImage } from 'BennyStyleLibrary/Global/rootStyles';
import { WrappedRowContainer } from './../../../../../BennyStyleLibrary/Global/containerStyles';

export const QuotePageContainer = styled(CenterAlignedColumnContainer)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-width: 800px;
`;

export const QuotePageOverlay = styled(CenterAlignedColumnContainer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

export const QuoteContainer = styled(CenterAlignedColumnContainer)`
  width: 96%;
  max-width: 800px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  line-height: 34px;
  color: rgba(255, 255, 255, 0.87);
  padding: 12px;
  padding-top: 25px;
  padding-bottom: 25px;
  z-index: 1;
  min-height: 50vh;
`;

export const QuoteAuthorImageContainer = styled(CenterAlignedColumnContainer)`
  width: 100%;
  max-width: 400px;
  height: 420px;
  overflow: hidden;
  border-radius: 36px;
  margin-top: -100px;
  position: relative;
  @media (min-width: 800px) {
    margin-top: -30px;
    height: 400px;
  }
`;

export const QuoteAuthorImage = styled(MotionImage)`
  object-fit: cover;
  border-radius: 36px;
  filter: grayscale(100%);
  opacity: 0.3;
`;

export const AuthorImageOverLay = styled(CenterAlignedColumnContainer)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 36px;
  z-index: 1;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 38.06%,
    rgba(0, 0, 0, 0) 80.39%
  );
`;

export const QuoteText = styled.h1`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  line-height: 34px;
  color: rgba(255, 255, 255, 0.87);
  height: auto;
  padding: 12px;
  display: flex;
  text-align: center;
  z-index: 1;
  max-width: 400px;
`;

export const QuotePageTagContainer = styled(FlexRowContainer)`
  width: auto;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 8px;
`;

export const QuotePageTagText = styled.h1`
  display: flex;
  margin: 0;
  flex-direction: row;
  justify-content: flex-start;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 200;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  padding-right: 3px;
  color: rgba(255, 255, 255, 0.8);
  width: auto;
  height: auto;
`;

export const QuotePageDesktopButtonContainer = styled(
  CenterAlignedColumnContainer
)`
  width: 100%;

  @media (max-width: 799px) {
    display: none;
  }

  @media (min-width: 800px) {
    margin-top: -20px;
  }
  @media (min-width: 1660px) {
    margin-top: 20px;
  }
`;

export const QuotePageDesktopActionButton = styled(
  CenterAlignedColumnContainer
)`
  width: 40%;
  height: 60px;
  border-radius: 30px;
  background: #f5f5f5;
  opacity: 0.7;
  border: 1px solid #e0e0e0;
`;

export const AuthorInfoDrawerContainer = styled(
  CenterAlignedFlexStartColumnContainer
)`
  width: 99%;
  height: 50vh;
  background: ${props => props.backgroundColor};
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  position: fixed;
  top: 56%;
  left: 0;
  z-index: 3;
  overflow-y: scroll;
  @media (min-width: 800px) {
    width: 30%;
    left: 35%;
  }
`;

export const AuthorInfoDrawerImage = styled(MotionImage)`
  width: 100px;
  height: 100px;
  min-height: 100px;
  margin-bottom: 16px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  margin-top: 16px;
  filter: grayscale(100%);
`;

export const AuthorInfoDrawerTextContainer = styled(
  CenterAlignedFlexStartColumnContainer
)`
  width: 98%;
  height: 150px;
  margin-bottom: 16px;
  overflow-y: scroll;
  @media (min-width: 800px) {
    width: 70%;
  }
`;

export const AuthorInfoDrawerText = styled.h1`
  width: 90%;
  color: rgba(255, 255, 255, 0.8);
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  padding-bottom: 36px;
`;

export const AuthorInfoDrawerCloseIcon = styled(CenterAlignedColumnContainer)`
  position: absolute;
  left: 86%;
  top: 10px;
  width: 40px;
  height: 40px;
`;

export const QuotePageIconContainer = styled(WrappedRowContainer)`
  width: 30%;
  padding: 12px;
  align-items: center;
  border-radius: 25px;
  position: absolute;
  z-index: 2;
  top: 80%;
  @media (min-width: 800px) {
    top: 92%;
  }
  @media (min-width: 1600px) {
    top: 68%;
    width: 10%;
  }
`;

export const FilterDrawerContainer = styled(
  CenterAlignedFlexStartColumnContainer
)`
  position: fixed;
  width: 98%;
  height: auto;
  min-height: 90vh;
  overflow-y: scroll;
  top: 10%;
  z-index: 5;
  justify-content: flex-start;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  @media (min-width: 800px) {
    width: 30%;
    left: 35%;
    top: 0;
  }
  @media (min-width: 1200px) {
    width: 30%;
    left: 35%;
    top: 10%;
  }
`;

export const FilterDrawerCloseIcon = styled(CenterAlignedColumnContainer)`
  position: absolute;
  top: 10px;
  left: 88%;
  width: 40px;
  height: 40px;
  z-index: 5;
`;

export const IntroAnimationText = styled.h1`
  font-family: Indie Flower;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  width: ${props => props.width};
`;

export const IntroAnimationButtonText = styled.h1`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
