import React from 'react';
import { CenterAlignedColumnContainer } from 'BennyStyleLibrary/Global/containerStyles';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import Loader from 'StylesLibrary/Atoms/LoadingModule/Loader';

const FallBackLoader = () => {
  return (
    <CenterAlignedColumnContainer height="100vh" backgroundColor="black">
      <Loader />
    </CenterAlignedColumnContainer>
  );
};

export default FallBackLoader;
