import React, { useEffect } from 'react';
import {
  useDisplayQuoteDispatch,
  useDisplayQuoteState
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import axios from 'axios';
import { apirequestSuccessVibraions } from 'Utils/vibrations.js';

const EditQuoteText = () => {
  const {
    editQuoteText: { editedText, initiateEditQuoteTextRequest },
    currentQuote
  } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  useEffect(() => {
    if (initiateEditQuoteTextRequest) {
      if (editedText == '') {
        dispatch({
          type: 'DQ_RSEST_EDIT_QUOTETEXT_STATE'
        });
      } else {
        createEditQuoteTextRequest();
      }
    }
  }, [initiateEditQuoteTextRequest]);

  const createEditQuoteTextRequest = async () => {
    const body = JSON.stringify({
      quote: editedText
    });
    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const quoteID = currentQuote[0]._id;

    const res = await axios.patch(`/api/v1/quote/${quoteID}`, body, config);
    console.log(res);
    if (res.data.status) {
      apirequestSuccessVibraions();
      dispatch({
        type: 'DQ_HANDLE_EDITQUOTESUCCESS',
        payload: { quoteID: quoteID, quote: editedText }
      });
    }
  };
  return <div></div>;
};

export default EditQuoteText;
