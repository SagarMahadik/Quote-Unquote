import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const NavigationCardContainer = styled(Link)`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  width: 252.5px;
  height: 119.37px;
  background: #e0e4e9;
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 2em;
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
  background: linear-gradient(
    278.38deg,
    #ab7070 30.83%,
    rgba(255, 0, 0, 0.37) 66.37%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
