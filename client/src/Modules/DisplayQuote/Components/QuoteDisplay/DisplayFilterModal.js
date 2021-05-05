import React from 'react';
import MoodPage from 'Modules/DisplayQuote/Components/MoodPage/MoodPage.js';
import {
  ModalWrapper,
  ModalContainer
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayFilterModal.js';

import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

import { AnimatePresence } from 'framer-motion';

const DisplayFilterModal = () => {
  const { displayFilterModal } = useDisplayQuoteState();

  return (
    <AnimatePresence>
      {displayFilterModal ? (
        <AnimationContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeOut',
            duration: 0.4
          }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ModalContainer containerHeight="600px">
            <MoodPage />
          </ModalContainer>
        </AnimationContainer>
      ) : null}
    </AnimatePresence>
  );
};

export default DisplayFilterModal;
