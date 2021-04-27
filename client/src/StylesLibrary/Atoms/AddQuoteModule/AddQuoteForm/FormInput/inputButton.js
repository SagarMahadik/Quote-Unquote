import styled from 'styled-components/macro';
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
  background: ${({ selected, theme: { colors } }) =>
    selected
      ? `#E0E4E9`
      : `linear-gradient(297.96deg, #E7EAEF -35.52%, #E7EAEF 46.28%, #CBD0D7 105.97%)`};
  box-shadow: ${({ selected }) =>
    selected
      ? `-4px -4px 8px #FFFFFF, 4px 4px 8px rgba(0, 0, 0, 0.25)`
      : `inset -4px -4px 8px #FFFFFF, inset 4px 4px 8px rgba(0, 0, 0, 0.25)`};
`;

export const InputButtonText = styled.h1`
  margin: 0;
  padding: 0;
  padding-right: 12px;
  padding-left: 12px;
  background: ${({ selected }) =>
    selected
      ? `linear-gradient(279.96deg, #AB7070 -16.21%, rgba(255, 0, 0, 0.37) 134.55%)`
      : `linear-gradient(98.37deg, #494343 3.9%, rgba(19, 17, 17, 0.35) 103.75%)`};
  font-family: PT Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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
