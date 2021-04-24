import React, { useEffect } from 'react';
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';

const CreateRequestFlow = () => {
  const {
    authorSearch: { searchString },
    quoteAuthorID,
    initiateRequestCreation,
    initiateTagsCheck,
    applicationData: { tagList }
  } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();

  useEffect(() => {
    if (initiateRequestCreation) {
      checkAuthorField(searchString, quoteAuthorID);
    }
  }, [initiateRequestCreation]);

  useEffect(() => {
    if (initiateTagsCheck) {
      checkTagsArray(tagList);
    }
  }, [initiateTagsCheck]);

  const checkAuthorField = (searchString, quoteAuthorID) => {
    if (searchString == '') {
      dispatch({
        type: 'AQ_SET_ANONYMOUS_AUTHOR_REQUIRED'
      });
      setAnonymousAuthor();
    }
    if (searchString != '' && quoteAuthorID == '') {
      createAuthorBeforeRequest(searchString);
    }
  };

  const setAnonymousAuthor = () => {
    console.log('in set anony');
    dispatch({
      type: 'AQ_SET_ANONYMOUS_QUOTE_AUTHOR'
    });
  };

  const createAuthorBeforeRequest = () => {
    console.log('create author before POST request');
  };

  const checkTagsArray = tagList => {
    console.log(tagList);
  };

  return <div></div>;
};

export default CreateRequestFlow;
