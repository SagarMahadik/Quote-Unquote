import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const NavigationCardContainer = styled.button`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  width: 252.5px;
  height: 119.37px;
  background: #e0e4e9;
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 3rem;
  outline: none;
  border: none;
  text-decoration: none;
`;

export const NavigatioCardText = styled.h1`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  background: ${props => props.navigatioCardTextColor};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
