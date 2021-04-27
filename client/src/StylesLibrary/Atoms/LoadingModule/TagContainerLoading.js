import styled, { keyframes } from 'styled-components/macro';
import { RightAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

export const InputButtonStyle = styled.button`
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin: 4px;
  border: none;
  outline: none;
  background: #e0e4e9;
`;

export const InputButtonText = styled.h1`
  margin: 0;
  padding: 0;
  padding-right: 12px;
  padding-left: 12px;
  opacity: 0;
  font-family: PT Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: bold;
`;

export const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 400px;
  justify-content: center;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  padding-right: 3px;
  color: #706565;
  width: 80%;
  justify-content: space-evenly;
  margin-top: 1.5em;
  flex-wrap: wrap;
  height: auto;
`;

export const ExploreMoreButton = styled.button`
  border: none;
  outline: none;
  background-color: #e7eaef;
  color: #706565;
  font-family: PT Sans;
  font-size: 12px;
  text-decoration: underline;
`;

export const ExploreMoreButtonContainer = styled(RightAlignedColumnContainer)`
  width: 80%;
  max-width: 400px;
  margin-top: 8px;
`;

export const ShimmerKeyFrames = keyframes`

0% {transform:translateX(-150%)}
50%{transform:translateX(-60%)}
100% {transform:translateX(150%)}
`;

export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${ShimmerKeyFrames} 2.5s infinite;
`;

export const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background: rgb(255, 255, 255, 0.2);
  transform: skewX(-20deg);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
`;
