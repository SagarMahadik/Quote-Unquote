import React from 'react';
import {
  CenterAlignedColumnContainer,
  CenterAlignedColumnContainerWithShadowBackground
} from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';
import { useRef } from 'react';
import { useEffect } from 'react';
import { getElementIntoView } from 'Utils/UIutils/getElementIntoView';

const Credo = () => {
  const { displayCredo } = useApplicationState();
  const credoContainerRef = useRef(null);

  useEffect(() => {
    if (displayCredo) {
      getElementIntoView(credoContainerRef.current);
    }
  }, [displayCredo]);
  return (
    <CenterAlignedColumnContainer
      ref={credoContainerRef}
      style={{ marginTop: '3rem' }}
    >
      {displayCredo ? (
        <CenterAlignedColumnContainerWithShadowBackground
          style={{ height: '80vh', width: '90%', marginBottom: '4rem' }}
        >
          Hello
        </CenterAlignedColumnContainerWithShadowBackground>
      ) : null}
    </CenterAlignedColumnContainer>
  );
};

export default Credo;
