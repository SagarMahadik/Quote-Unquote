import React from 'react';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import {
  InputButtonStyle,
  InputButtonText,
  InputButtonContainer
} from 'StylesLibrary/Atoms/LoadingModule/TagContainerLoading.js';

import ShimmerContainer from 'StylesLibrary/Atoms/LoadingModule/ShimmerContainer.js';

const InputButtonLoadingContainer = () => {
  let tags = [
    'Philosophy',
    'wit',
    'Objectivism',
    'Life',
    'Technology',
    'Fitness',
    'coding'
  ];
  return (
    <CenterAlignedColumnContainer style={{ position: 'relative' }}>
      <InputButtonContainer>
        {tags.map(t => {
          return (
            <InputButtonStyle>
              <InputButtonText>{t}</InputButtonText>
            </InputButtonStyle>
          );
        })}
      </InputButtonContainer>
      <ShimmerContainer />
    </CenterAlignedColumnContainer>
  );
};

export default InputButtonLoadingContainer;
