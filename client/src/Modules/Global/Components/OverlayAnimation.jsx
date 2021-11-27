import React from 'react';
import { CenterAlignedColumnContainer } from '../../../BennyStyleLibrary/Global/containerStyles';

const OverlayAnimation = () => {
  return (
    <div>
      <CenterAlignedColumnContainer
        position="absolute"
        top="0"
        left="0"
        width="96%"
        height="100%"
        background="black"
        border="1px solid black"
        zIndex="2"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      />
    </div>
  );
};

export default OverlayAnimation;
