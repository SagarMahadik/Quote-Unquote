import React, { useEffect } from 'react';
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';
import { isEmpty } from 'Utils/validations.js';

const FormValidations = () => {
  const {
    quote,
    requiredFieldsError,
    initiateValidations
  } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();

  console.log(initiateValidations);

  useEffect(() => {
    removeValidationError(quote);
    if (initiateValidations) {
      runValidationForAddQuote(quote);
    }
  }, [initiateValidations, quote]);

  const runValidationForAddQuote = quote => {
    console.log('in a validations');
    if (isEmpty(quote)) {
      dispatch({
        type: 'AQ_SET_VALIDATION_ERROR'
      });
    } else {
      dispatch({
        type: 'AQ_VALIDATION_COMPLETE'
      });
    }
  };

  const removeValidationError = quote => {
    if (!isEmpty(quote)) {
      dispatch({
        type: 'AQ_REMOVE_VALIDATION_ERROR'
      });
    }
  };

  return <div></div>;
};

export default FormValidations;
