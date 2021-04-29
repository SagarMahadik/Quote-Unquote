import React, { useEffect } from 'react';

import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';
import useCreateAuthor from 'APICalls/Authors/useCreateAuthor.js';

import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

const CreateAuthor = () => {
  const { sendStepStatusRequest } = useStepStatusRequest();
  const {
    initiateNewAuthorCreation,
    authorSearch: { searchString }
  } = useAddQuoteState();
  const {
    mutateAsync: createAuthor,
    isError,
    error,
    isSuccess,
    status
  } = useCreateAuthor();

  const dispatch = useAddQuoteDispatch();

  useEffect(() => {
    if (initiateNewAuthorCreation) {
      addAuthorToDB(searchString);
    }
  }, [initiateNewAuthorCreation]);

  useEffect(() => {
    if (isSuccess) {
      sendStepStatusRequest('Author created successfully', 'success');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      sendStepStatusRequest('Author creation failed', 'failure');
    }
  }, [isError]);

  const addAuthorToDB = async searchString => {
    let authorName = searchString;
    const body = JSON.stringify({ authorName });
    const res = await createAuthor(body);
    console.log(res);
    setNewAuthorInRequest(res._id);
  };

  const setNewAuthorInRequest = author => {
    dispatch({
      type: 'AQ_SET_AUTHOR_TO_STATE',
      payload: author
    });
  };

  return <div></div>;
};

export default CreateAuthor;
