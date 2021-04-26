import React from 'react';
import MoodPage from 'Modules/DisplayQuote/Components/MoodPage/MoodPage.js';
import {
  ModalWrapper,
  ModalContainer
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayFilterModal.js';

import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

const DisplayFilterModal = () => {
  const { displayFilterModal } = useDisplayQuoteState();

  return (
    <>
      {displayFilterModal ? (
        <ModalWrapper>
          <ModalContainer containerHeight="auto">
            <MoodPage />
          </ModalContainer>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default DisplayFilterModal;
