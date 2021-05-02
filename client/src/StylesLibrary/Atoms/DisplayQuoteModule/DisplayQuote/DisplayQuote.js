import styled from 'styled-components/macro';
import {
  RowContainer,
  CenterAlignedColumnContainerWithShadowBackground
} from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const QuotationRight = styled(RowContainer)`
  justify-content: flex-end;
  margin-right: 15px;
  margin-top: -20px;
  margin-bottom: 15px;
  height: 40px;
`;

export const QuotationLeft = styled(RowContainer)`
  justify-content: flex-start;
  margin-left: 15px;
  height: 40px;
`;

export const QuoteContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 5rem;
  margin-right: 0px;
  margin-left: 0px;
  padding: 15px;
  width: 80%;
  height: auto;
  justify-content: flex-start;
`;

export const QuotationSymbolText = styled.h1`
  font-size: 64px;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  color: #5c5656;
  margin: 0;
  padding: 0;
`;

export const QuoteText = styled.h1`
  width: 80%;
  background: #e7eaef;
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  color: #5c5656;
  margin: 0;
  height: auto;
  padding: 30px 25px 30px 25px;
  min-height: 100px;
`;
