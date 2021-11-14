import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CenterAlignedRowContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

const Container = styled(motion.div)``;

export const CenterAlignedColumnContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${props => props.backgroundColor};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
  box-shadow: ${props => props.boxShadow};
  position: ${props => props.position};
  z-index: ${props => props.zIndex};
  overflow: ${props => props.overflow};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  justify-content: ${props => props.justifyContent};
`;

export const QuoteContainer = styled(CenterAlignedColumnContainer)`
  width: 80%;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  line-height: 34px;
  color: rgba(255, 255, 255, 0.9);
  height: auto;
  //min-height: 30vh;
  padding: 12px;
  padding-top: 25px;
  padding-bottom: 25px;
  z-index: 1;
`;

export const IconsContainer = styled(CenterAlignedRowContainer)`
  width: 24%;
  margin-top: 25px;
  align-items: flex-start;
  justify-content: space-between;
  position: absolute;
  top: 70%;
  padding: 12px;
  border-radius: 8px;
  z-index: 2;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: Noto Sans;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const TagText = styled.h3`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.9);
  margin-right: 5px;
  margin-left: 5px;
`;

export const QuotePageOverlay = styled(CenterAlignedColumnContainer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

export const AuthorProfileContainer = styled(CenterAlignedColumnContainer)`
  width: 100%;
  height: 34vh;
  background: ${props => props.backgroundColor};
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  position: fixed;
  top: 64%;
  z-index: 3;
`;

export const AuthorProfileImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  filter: grayscale(100%);
`;

export const AuthorProfileInformationContainer = styled(
  CenterAlignedColumnContainer
)`
  width: 90%;
  height: 20vh;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-bottom: 28px;
`;
