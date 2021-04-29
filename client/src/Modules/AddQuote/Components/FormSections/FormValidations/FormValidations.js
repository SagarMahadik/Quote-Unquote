import React, { useEffect } from 'react';
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';
import { isEmpty } from 'Utils/validations.js';
import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

const FormValidations = () => {
  const { quote, initiateValidations } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();
  const { sendStepStatusRequest } = useStepStatusRequest();
  useEffect(() => {
    removeValidationError(quote);
    if (initiateValidations) {
      sendStepStatusRequest('AddQuote| Initiate validations on quote');
      runValidationForAddQuote(quote);
    }
  }, [initiateValidations, quote]);

  const runValidationForAddQuote = quote => {
    if (isEmpty(quote)) {
      sendStepStatusRequest(
        'AddQuote| Quote field empty | Set validation error'
      );

      dispatch({
        type: 'AQ_SET_VALIDATION_ERROR'
      });
    } else {
      sendStepStatusRequest(
        'AddQuote| Quote field filled | Remove the validation error'
      );

      dispatch({
        type: 'AQ_VALIDATION_COMPLETE'
      });
    }
  };

  const removeValidationError = quote => {
    if (!isEmpty(quote)) {
      sendStepStatusRequest(
        'AddQuote| Quote field filled | validation complete'
      );

      dispatch({
        type: 'AQ_REMOVE_VALIDATION_ERROR'
      });
    }
  };

  return <div></div>;
};

export default FormValidations;
