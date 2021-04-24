import styled from 'styled-components/macro';
import {
  CenterAlignedColumnContainerWithShadowBackground,
  LeftAlignedColumnContainer
} from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const DropDownOptionsContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  width: 50%;
  height: auto;
  margin-top: 0.8em;
  margin-bottom: 1em;
  padding: 0.5em;
`;

export const DropDownOptionContainer = styled(LeftAlignedColumnContainer)`
  width: 94%;
  height: 30px;
  border-radius: 5px;
  justify-content: center;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding-left: 0.5em;
  background: #e7eaef;
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const DropDownOptionLineText = styled.h1`
  font-style: normal;
  font-weight: normal;
  line-height: 13px;
  font-family: Questrial;
  color: #828282;
  margin: 1px;
  padding: 1px;
`;

export const DropDownOptionLine1Text = styled(DropDownOptionLineText)`
  font-size: 10px;
`;

export const DropDownOptionLine2Text = styled(DropDownOptionLineText)`
  font-size: 8px;
`;
