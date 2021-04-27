import styled from 'styled-components';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

export const GoButtonStyle = styled(CenterAlignedColumnContainer)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: linear-gradient(279.96deg, #e7eaef -16.21%, #e7eaef 134.55%);
`;

export const GoButtonText = styled.h1`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  background: linear-gradient(
    99.93deg,
    #25dab9 4%,
    #d37272 31.42%,
    #7674cc 96.55%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GoButtonBorder = styled(CenterAlignedColumnContainer)`
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    279.96deg,
    rgba(171, 112, 112, 0.25) -16.21%,
    rgba(255, 0, 0, 0.0925) 134.55%
  );
  padding: 2px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
