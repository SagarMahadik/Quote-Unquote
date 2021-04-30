import styled from 'styled-components/macro';

export const PageHeadingContainer = styled.div`
  width: 100%;
  display: grid;
  margin: 12px;
  height: 125px;
  grid-template-columns: 1fr 4fr 1fr;
  justify-items: center;
  align-items: center;
  background: #e7eaef;
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.25), -4px -4px 16px 2px #ffffff,
    inset -2px -2px 8px 2px #ffffff, inset 4px 4px 8px 2px rgba(81, 78, 78, 0.5);
  border-radius: 5px;
  border: 4px 4px 8px 2px rgba(0, 0, 0, 0.25), -4px -4px 16px 2px #ffffff,
    inset -2px -2px 8px 2px #ffffff, inset 4px 4px 8px 2px rgba(81, 78, 78, 0.5);
  border-radius: 5px;
  border-radius: 5px;
`;

export const PageHeadingText = styled.h1`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #dd6767;
`;
