import React, { useEffect } from 'react';
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';

import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

const CreateRequestFlow = () => {
  const { sendStepStatusRequest } = useStepStatusRequest();

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
      sendStepStatusRequest('AddQuote| Initiate Request creation', 'success');
      checkAuthorField(searchString, quoteAuthorID);
    }
  }, [initiateRequestCreation]);

  useEffect(() => {
    if (initiateTagsCheck) {
      sendStepStatusRequest('AddQuote |Initiate Tags check', 'success');

      checkTagsArray(tagList);
    }
  }, [initiateTagsCheck]);

  const checkAuthorField = (searchString, quoteAuthorID) => {
    if (searchString == '') {
      sendStepStatusRequest(
        'Addquote| Author not added | set author as Anonymous',
        'success'
      );
      dispatch({
        type: 'AQ_SET_ANONYMOUS_AUTHOR_REQUIRED'
      });
      setAnonymousAuthor();
    }
    if (searchString != '' && quoteAuthorID == '') {
      sendStepStatusRequest(
        'Addquote| new Author added |create author',
        'success'
      );
      createAuthorBeforeRequest(searchString);
    }
    if (quoteAuthorID != '') {
      sendStepStatusRequest(
        'Addquote| Author selected from DB | Check for tags',
        'success'
      );
      dispatch({
        type: 'AQ_INITIATE_TAG_CHECK'
      });
    }
  };

  const setAnonymousAuthor = () => {
    sendStepStatusRequest(
      'Addquote| Author not added | setting author as Anonymous',
      'success'
    );
    dispatch({
      type: 'AQ_SET_ANONYMOUS_QUOTE_AUTHOR'
    });
  };

  const createAuthorBeforeRequest = () => {
    sendStepStatusRequest(
      'Addquote| new Author added |creating new author',
      'success'
    );
    dispatch({ type: 'AQ_CREATE_NEW_AUTHOR' });
  };

  const checkTagsArray = tagList => {
    checkForNewTgs(tagList);
  };

  const checkForNewTgs = tagList => {
    sendStepStatusRequest(
      'Addquote| Authorvalidation complete | Checking for tags',
      'success'
    );
    let newTags = tagList.filter(tag => tag.newTag);
    let newTagsCount = newTags.length;

    if (newTagsCount > 0) {
      sendStepStatusRequest(
        'Addquote| New tags added | create newtags array',
        'success'
      );
      dispatch({
        type: 'AQ_CREATE_NEWTAGS_ARRAY',
        payload: newTags
      });
      sendStepStatusRequest(
        'Addquote| New tags added |create new tag request',
        'success'
      );
      dispatch({
        type: 'AQ_CREATE_NEW_TAGS'
      });
    } else {
      sendStepStatusRequest(
        'Addquote| Tags & author validation complete |initiate create quotes',
        'success'
      );
      dispatch({
        type: 'AQ_INITIATE_ADD_QUOTE'
      });
    }
  };

  return <div></div>;
};

export default CreateRequestFlow;
