import styled from 'styled-components/macro';
import {
  RowContainer,
  CenterAlignedColumnContainerWithShadowBackground,
  CenterAlignedColumnContainer
} from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

import { motion } from 'framer-motion';

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
  filter: ${props => (props.editText ? 'blur(4px)' : 'none')};
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
  background: ${props => (props.dragScale ? 'none' : '#e7eaef')};
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
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
  transform: ${props => (props.dragScale ? 'scale(0.05)' : 'none')};
  transition: ease-out 1.4s;
  border-radius: ${props => (props.dragScale ? '50px' : '')};
  opacity: ${props => (props.dragScale ? 0 : 1)};
`;

export const EditQuoteContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: ${props =>
    props.editQuoteSuccess
      ? 'rgba(255, 155, 255, 0.2)'
      : 'rgba(255, 255, 255, 0.2)'};
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

export const EditTextContainer = styled(CenterAlignedColumnContainer)`
  position: absolute;
  top: 30%;
  margin-top: ${props => props.marginTop};
`;

export const EditQuoteInputBox = styled.textarea`
  width: 88%;
  background: rgba(255, 255, 255, 0.4);
  font-family: 'roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  color: #5c5656;
  margin: 0;
  border-radius: 8px;
  padding: 8px;
  height: 100px;
  border: none;
  z-index: 200;

  &:focus {
    outline: none;
  }
`;

export const EditButtonContainer = styled(CenterAlignedColumnContainer)`
  margin-top: -3 rem;
`;

export const TrashIconContainer = styled(CenterAlignedColumnContainer)`
  position: absolute;
  top: 30%;
  margin-top: ${props => props.marginTop};
  width: 100%;
  height: auto;
`;

export const TickIconContainer = styled(CenterAlignedColumnContainer)`
  margin-top: -120px;
  width: 100%;
  height: auto;
`;

export const DeleteOverlayContainer = styled(CenterAlignedColumnContainer)`
  height: 100vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;
