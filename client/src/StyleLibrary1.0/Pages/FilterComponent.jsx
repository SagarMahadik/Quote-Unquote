import React from 'react';
import { tags } from '../../SeedData/tags';
import { authors } from 'SeedData/author.js';
import styled from 'styled-components';
import { CenterAlignedColumnContainer } from 'StyleLibrary1.0/Atoms/containerStyles.js';
import { RowContainer } from './../../StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import { AuthorProfileImage } from 'StyleLibrary1.0/Atoms/containerStyles.js';
import CloseIcon from 'StyleLibrary1.0/Icons/CloseIcon.js';
import StartReadingIcon from 'StyleLibrary1.0/Icons/StartReadingIcon.jsx';
import { InputButtonLoadingContainer } from 'StylesLibrary/Molecules/LoadingModule/InputButtonLoadingContainer';
const FilterContainer = styled(CenterAlignedColumnContainer)`
  width: 100%;
  height: 96%;
  min-height: 100vh;
  position: fixed;
  top: 4%;
  z-index: 5;
  justify-content: flex-start;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const FilterGroupHeadingConatainer = styled(CenterAlignedColumnContainer)`
  justify-content: flex-start;
  width: 100%;
  height: 80px;
`;

const FilterGroupHeading = styled.h1`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
`;

const FilterTagButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 25px;
  outline: none;
  border: none;
  background: none;
  margin: 5px;
  border: ${props =>
    props.selected ? '2px solid rgba(255, 255, 255, 0.77)' : 'none'};
  background-color: ${props =>
    props.selected ? 'rgba(255, 255, 255, 0.44)' : 'none'};
`;

const FilterTagText = styled.h3`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const FilterTagButtonContainer = styled(RowContainer)`
  width: 90%;
  height: 200px;
  padding: 8px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: scroll;
`;

const FilterTagSVGContainer = styled(CenterAlignedColumnContainer)`
  justify-content: flex-start;
  width: 70px;
  height: 70px;
  margin-top: 10px;
`;

const FilterTagSVGImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

const FilterImageContainer = styled(RowContainer)`
  width: 96%;
  height: 200px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: scroll;
  padding: 8px;
`;

export const FilterAuthorImage = styled(AuthorProfileImage)`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

const FilterAuthorName = styled.h3`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-top: -6px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const FilterAuthorImageNameContainer = styled(CenterAlignedColumnContainer)`
  width: 90px;
  height: auto;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 15px;
  justify-content: flex-start;
  border: ${props =>
    props.selected ? '2px solid rgba(255, 255, 255, 0.77)' : 'none'};
  background-color: ${props =>
    props.selected ? 'rgba(255, 255, 255, 0.44)' : 'none'};
`;

const CloseIconContainer = styled(CenterAlignedColumnContainer)`
  justify-content: flex-start;
  width: 30px;
  height: 30px;
  position: relative;
  left: 40%;
  top: 2%;
`;

const FilterComponent = ({
  setFilterComponentDisplay,
  setDisplayOverlay,
  displayQuoteTheme,
  themeIndex
}) => {
  return (
    <FilterContainer
      backgroundColor={`radial-gradient(51.33% 74.07% at 48.67% 46.39%, ${displayQuoteTheme[themeIndex].primaryColor} 0%,${displayQuoteTheme[themeIndex].secondaryColor} 100%)`}
      initial={{ y: 700, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 700 }}
      transition={{ duration: 0.8 }}
    >
      <CloseIconContainer>
        <CloseIcon
          onClick={() => {
            setFilterComponentDisplay(false);
            setDisplayOverlay(false);
          }}
        />
      </CloseIconContainer>
      <FilterGroupHeadingConatainer style={{ marginTop: '-20px' }}>
        <FilterGroupHeading>Tags</FilterGroupHeading>
      </FilterGroupHeadingConatainer>
      <FilterTagButtonContainer>
        {tags.map(tag => (
          <FilterTagButton key={tag.tag}>
            <FilterTagSVGContainer>
              <FilterTagSVGImage src={tag.tagSVGIcon}></FilterTagSVGImage>
            </FilterTagSVGContainer>
            <FilterTagText>{tag.tag}</FilterTagText>
          </FilterTagButton>
        ))}
      </FilterTagButtonContainer>
      <FilterGroupHeadingConatainer style={{ marginTop: '8px' }}>
        <FilterGroupHeading style={{ marginTop: '16px' }}>
          Authors
        </FilterGroupHeading>
      </FilterGroupHeadingConatainer>
      <FilterImageContainer>
        {authors.map(author => {
          return (
            <FilterAuthorImageNameContainer key={author.id}>
              <FilterAuthorImage src={author.image} />
              <FilterAuthorName>{author.name}</FilterAuthorName>
            </FilterAuthorImageNameContainer>
          );
        })}
      </FilterImageContainer>
      <StartReadingIcon
        style={{ width: '54px', height: '54px', marginTop: '16px' }}
      />
    </FilterContainer>
  );
};

export default FilterComponent;
