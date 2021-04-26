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
    if (quoteAuthorID != '') {
      dispatch({
        type: 'AQ_INITIATE_TAG_CHECK'
      });
    }
  };

  const setAnonymousAuthor = () => {
    console.log('in set anony');
    dispatch({
      type: 'AQ_SET_ANONYMOUS_QUOTE_AUTHOR'
    });
  };

  const createAuthorBeforeRequest = () => {
    dispatch({ type: 'AQ_CREATE_NEW_AUTHOR' });
  };

  const checkTagsArray = tagList => {
    checkForNewTgs(tagList);
  };

  const checkForNewTgs = tagList => {
    let newTags = tagList.filter(tag => tag.newTag);
    let newTagsCount = newTags.length;

    if (newTagsCount > 0) {
      console.log('new tags added');
      dispatch({
        type: 'AQ_CREATE_NEWTAGS_ARRAY',
        payload: newTags
      });
      dispatch({
        type: 'AQ_CREATE_NEW_TAGS'
      });
    } else {
      dispatch({
        type: 'AQ_INITIATE_ADD_QUOTE'
      });
    }
  };

  return <div></div>;
};

export default CreateRequestFlow;
