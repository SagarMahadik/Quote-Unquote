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

  min-height: 100vh;
  background: radial-gradient(
    103.04% 56.47% at 49.87% 50%,
    #3965a2 30.25%,
    #192747 100%
  );
`;

export const QuotePageOverlay = styled(CenterAlignedColumnContainer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

export const QuoteContainer = styled(CenterAlignedColumnContainer)`
  width: 80%;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  line-height: 34px;
  color: rgba(255, 255, 255, 0.87);
  height: auto;
  padding: 12px;
  padding-top: 25px;
  padding-bottom: 25px;
  z-index: 1;
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
  z-index: 1;
`;

export const QuotePageTagContainer = styled(FlexRowContainer)`
  width: auto;
  height: auto;
  overflow-x: scroll;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const QuotePageTagText = styled.h1`
  display: flex;
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
  color: rgba(255, 255, 255, 0.9);
  width: auto;
  height: auto;
  margin-right: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
`;

export const AuthorInfoDrawerContainer = styled(
  CenterAlignedFlexStartColumnContainer
)`
  width: 99%;
  height: 40vh;
  background: ${props => props.backgroundColor};
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  position: fixed;
  top: 68%;
  left: 0;
  z-index: 3;
  background: radial-gradient(
    51.33% 74.07% at 48.67% 46.39%,
    rgba(57, 101, 162, 0.8) 0%,
    rgba(26, 41, 74, 0.8) 100%
  );
  overflow-y: scroll;
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
  top: 80%;
`;

export const FilterDrawerContainer = styled(
  CenterAlignedFlexStartColumnContainer
)`
  position: fixed;
  width: 98%;
  height: auto;
  min-height: 90vh;
  top: 10%;
  z-index: 5;
  justify-content: flex-start;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.6);
`;

export const FilterDrawerCloseIcon = styled(CenterAlignedColumnContainer)`
  position: absolute;
  top: 10px;
  left: 88%;
  width: 40px;
  height: 40px;
  z-index: 5;
`;
