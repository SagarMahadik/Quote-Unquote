import React from 'react';
import {
  ShimmerWrapper,
  Shimmer
} from 'StylesLibrary/Atoms/LoadingModule/TagContainerLoading.js';

const ShimmerContainer = () => {
  return (
    <ShimmerWrapper>
      <Shimmer />
    </ShimmerWrapper>
  );
};

export default ShimmerContainer;
