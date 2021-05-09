import React, { useEffect, useState } from 'react';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import ArrowIcon from './ArrowIcon';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';

import { getElementIntoView } from 'Utils/UIutils/getElementIntoView.js';

const UpArrowIcon = ({ logoRef }) => {
  const { displayCredo, scrollToLogo } = useApplicationState();
  const dispatch = useApplicationDispatch();

  useEffect(() => {
    if (scrollToLogo) {
      getElementIntoView(logoRef.current);
      dispatch({
        type: 'TOGGLE_DISPLAY_CREDO'
      });
    }
  }, [scrollToLogo]);
  console.log(logoRef);
  return (
    <CenterAlignedColumnContainer
      style={{ transform: 'rotate(180deg)', marginTop: '-4rem' }}
    >
      {displayCredo ? (
        <ArrowIcon
          onClick={() => dispatch({ type: 'TOGGLE_SCROLL_TO_LOGO' })}
        />
      ) : null}
    </CenterAlignedColumnContainer>
  );
};

export default UpArrowIcon;
