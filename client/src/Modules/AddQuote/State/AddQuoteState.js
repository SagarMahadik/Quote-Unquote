import React, { useReducer, useContext, useEffect } from 'react';
import {
  AddQuoteContext,
  AddQuoteDispatchContext
} from 'Modules/AddQuote/State/AddQuoteContext.js';
import AddQuoteReducer from 'Modules/AddQuote/State/AddQuoteReducer.js';
import { tagsList } from 'Modules/AddQuote/Components/FormSections/Tags/TagSeedData.js';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';

const AddQuoteState = ({ children }) => {
  const {
    applicationData: { tags, authors, quotes }
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
      let anonymousAuthor = authorData.filter(
        author => author.authorName === 'Anonymous'
      );
      dispatch({
        type: 'SET_ANONYMOUSAUTHOR',
        payload: anonymousAuthor[0]._id
      });
    }
  };

  const setTagsState = tagsData => {
    if (tagsData.length > 0) {
      dispatch({
        type: 'AQ_SET_TAGS',
        payload: tagsData
      });
    }
  };

  useEffect(() => {
    setTagsState(tags);
  }, [tags]);

  useEffect(() => {
    setAuthorsState(authors);
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
      'useAddQuoteState must be used within a SupplierDetailsProvider'
    );
  }
  return context;
}

function useAddQuoteDispatch() {
  const context = useContext(AddQuoteDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useAddQuoteDispatch must be used within a SupplierDetailsDispatchProvider'
    );
  }
  return context;
}

export { AddQuoteState, useAddQuoteState, useAddQuoteDispatch };
