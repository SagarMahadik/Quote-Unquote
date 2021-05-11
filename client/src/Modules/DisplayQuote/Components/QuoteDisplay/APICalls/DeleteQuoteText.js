import React, { useEffect } from 'react';
import {
  useDisplayQuoteDispatch,
  useDisplayQuoteState
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import axios from 'axios';
import { submitVibrations } from 'Utils/vibrations';

const DeleteQuote = () => {
  const {
    deleteQuote: {
      trashAnimatation,
      initiateDeleteQuoteRequest,
      deleteRequestSuccess,
      QuoteID,
      completeDelete
    },
    currentQuote
  } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  useEffect(() => {
    if (initiateDeleteQuoteRequest) {
      console.log('in delete');
      deleteQuote();
    }
  }, [initiateDeleteQuoteRequest]);

  useEffect(() => {
    console.log('In a useEffecr');

    if (deleteRequestSuccess) {
      handleDeleteSuccess();
    }
  }, [deleteRequestSuccess]);

  useEffect(() => {
    if (completeDelete) {
      dispatch({
        type: 'DQ_DELETE_RESET'
      });
    }
  }, [completeDelete]);

  const handleDeleteSuccess = () => {
    console.log(QuoteID);
    dispatch({
      type: 'DQ_RESET_QUOTES_POST_DELETE',
      payload: currentQuote[0]._id
    });
  };

  const deleteQuote = async () => {
    const quoteID = currentQuote[0]._id;

    const res = await axios.delete(`/api/v1/quote/${quoteID}`);
    console.log(res);
    if (res.status === 204) {
      submitVibrations();
      dispatch({
        type: 'DQ_QUOTE_DELETE_REQUEST_SUCCESS'
      });
    }
  };
  return <div></div>;
};

export default DeleteQuote;
