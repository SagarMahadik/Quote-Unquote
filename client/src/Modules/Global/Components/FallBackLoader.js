import React from 'react';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import Loader from 'StylesLibrary/Atoms/LoadingModule/Loader';

const FallBackLoader = () => {
  return (
    <CenterAlignedColumnContainerWithShadowBackground
      style={{ height: '100vh' }}
    >
      <Loader />
    </CenterAlignedColumnContainerWithShadowBackground>
  );
};

export default FallBackLoader;
