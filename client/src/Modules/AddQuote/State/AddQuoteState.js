import React, { useReducer, useContext, useEffect } from 'react';
import {
  AddQuoteContext,
  AddQuoteDispatchContext
} from 'Modules/AddQuote/State/AddQuoteContext.js';
import AddQuoteReducer from 'Modules/AddQuote/State/AddQuoteReducer.js';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';

import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

const AddQuoteState = ({ children }) => {
  const { sendStepStatusRequest } = useStepStatusRequest();
  const {
    applicationData: { tags, authors }
  } = useApplicationState();
  const initialState = {
    quote: '',
    quoteAuthor: '',
    anonymousAuthorID: '',
    quoteAuthorID: '',
    quoteTags: [],
    tagDetails: [],
    newTagText: '',
    addNewTag: false,
    addQuoteSuccess: false,
    applicationData: {
      tagList: [],
      authorList: []
    },
    authorSearch: {
      searchString: '',
      searchResults: []
    },
    requiredFieldsError: {
      quote: false
    },
    newTagsAdded: [],
    newTagsCount: 0,
    newUploadedTags: [],
    initiateValidations: false,
    validationsComplete: false,
    initiateRequestCreation: false,
    initiateNewAuthorCreation: false,
    initiateTagsCheck: false,
    initiateNewTagCreation: false,
    anonymousAuthorSet: false,
    anonymousAuthorRequired: false,
    initiateQuoteCreation: false,
    quoteCreatedSuccessfully: false
  };

  const [state, dispatch] = useReducer(AddQuoteReducer, initialState);

  const {
    quote,
    quoteAuthor,
    anonymousAuthorID,
    quoteAuthorID,
    quoteTags,
    tagDetails,
    newTagText,
    addNewTag,
    addQuoteSuccess,
    applicationData,
    authorSearch,
    requiredFieldsError,
    newTagsAdded,
    newTagsCount,
    newUploadedTags,
    initiateValidations,
    validationsComplete,
    initiateRequestCreation,
    initiateNewAuthorCreation,
    initiateTagsCheck,
    initiateNewTagCreation,
    initiateQuoteCreation,
    quoteCreatedSuccessfully
  } = state;

  const setAuthorsState = authorData => {
    if (authorData.length > 0) {
      dispatch({
        type: 'AQ_SET_AUTHORS',
        payload: authorData
      });
      sendStepStatusRequest('AddQuoteModule| Authors added to the state');

      let anonymousAuthor = authorData.filter(
        author => author.authorName === 'Anonymous'
      );
      dispatch({
        type: 'SET_ANONYMOUSAUTHOR',
        payload: anonymousAuthor[0]._id
      });
      sendStepStatusRequest(
        'AddQuoteModule| Anonymous author added to the state'
      );
    }
  };

  const setTagsState = tagsData => {
    if (tagsData.length > 0) {
      dispatch({
        type: 'AQ_SET_TAGS',
        payload: tagsData
      });
      sendStepStatusRequest('AddQuoteModule| Tags added to the state');
    }
  };

  useEffect(() => {
    setTagsState(tags);
  }, [tags]);

  useEffect(() => {
    setAuthorsState(authors);
    sendStepStatusRequest('AddQuoteModule| Authors added to the state');
  }, [authors]);

  return (
    <AddQuoteContext.Provider
      value={{
        quote,
        quoteAuthor,
        anonymousAuthorID,
        quoteAuthorID,
        quoteTags,
        tagDetails,
        newTagText,
        addNewTag,
        addQuoteSuccess,
        applicationData,
        authorSearch,
        requiredFieldsError,
        newTagsAdded,
        newTagsCount,
        newUploadedTags,
        initiateValidations,
        validationsComplete,
        initiateRequestCreation,
        initiateNewAuthorCreation,
        initiateTagsCheck,
        initiateNewTagCreation,
        initiateQuoteCreation,
        quoteCreatedSuccessfully
      }}
    >
      <AddQuoteDispatchContext.Provider value={dispatch}>
        {children}
      </AddQuoteDispatchContext.Provider>
    </AddQuoteContext.Provider>
  );
};

export default AddQuoteState;

function useAddQuoteState() {
  const context = useContext(AddQuoteContext);

  if (context === undefined) {
    throw new Error(
      'useAddQuoteState must be used within a AddQuoteContext Provider'
    );
  }
  return context;
}

function useAddQuoteDispatch() {
  const context = useContext(AddQuoteDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useAddQuoteDispatch must be used within a AddQuoteContextDispatchProvider'
    );
  }
  return context;
}

export { AddQuoteState, useAddQuoteState, useAddQuoteDispatch };
