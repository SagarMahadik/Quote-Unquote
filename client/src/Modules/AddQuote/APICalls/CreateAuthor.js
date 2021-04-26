import React, { useEffect } from 'react';

import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';
import useCreateAuthor from 'APICalls/Authors/useCreateAuthor.js';

const CreateAuthor = () => {
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
      console.log('Done uplaoding Author');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log('there was error');
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
