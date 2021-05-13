import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const RowContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: auto;
  flex-wrap: wrap;
  align-items: center;
`;

export const ColumnContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  border-radius: 5px;
`;

export const CenterAlignedColumnContainer = styled(ColumnContainer)`
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin-top: ${props => props.marginTop};
  height: auto;
`;

export const CenterAlignedColumnContainerWithShadowBackground = styled(
  CenterAlignedColumnContainer
)`
  height: auto;
  max-width: 600px;
  width: 100%;
  background: #e7eaef;
  border: 2px solid #e7eaef;
  box-sizing: border-box;
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.25), -4px -4px 16px 2px #ffffff,
    inset -2px -2px 8px 2px #ffffff, inset 4px 4px 8px 2px rgba(81, 78, 78, 0.5);
  border-radius: 5px;
`;

export const PageContentContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)``;

export const LeftAlignedColumnContainer = styled(ColumnContainer)`
  align-items: flex-start;
`;

export const RightAlignedColumnContainer = styled(ColumnContainer)`
  align-items: flex-end;
  margin-top: ${props => props.marginTop};
`;

export const CenterAlignedRowContainer = styled(RowContainer)`
  justify-content: center;
  align-items: center;
`;

export const AdminPageHeadingContainer = styled(RowContainer)`
  width: 90%;
  justify-content: space-between;
  background: none;
`;
