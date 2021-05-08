import React from 'react';
import { TickIconContainer } from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuote.js';
import TrashIcon from 'StylesLibrary/Atoms/GlobalQuoteModule/Icons/TrashIcon.js';
import TickIcon from 'StylesLibrary/Atoms/GlobalQuoteModule/Icons/TickIcon';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import DeleteSound from 'StylesLibrary/Sounds/DeleteSound';

const DeleteQuoteComponent = () => {
  const {
    deleteQuote: {
      deleteQuote,
      dragStart,
      initiateDeleteQuoteRequest,
      deleteRequestSuccess
    }
  } = useDisplayQuoteState();
  console.log(deleteRequestSuccess);
  return (
    <div style={{ zIndex: 200 }}>
      <TrashIcon dragStart={dragStart} quoteDeleted={deleteQuote} />
      {initiateDeleteQuoteRequest ? (
        <>
          <TickIconContainer>
            <TickIcon />
          </TickIconContainer>
        </>
      ) : null}
    </div>
  );
};

export default DeleteQuoteComponent;
