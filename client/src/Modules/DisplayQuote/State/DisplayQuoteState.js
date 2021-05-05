import React, { useReducer, useContext, useEffect, useState } from 'react';
import {
  DisplayQuoteContext,
  DisplayQuoteDispatchContext
} from 'Modules/DisplayQuote/State/DisplayQuoteContext.js';
import DisplayQuoteReducer from 'Modules/DisplayQuote/State/DisplayQuoteReducer.js';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';

const DisplayQuoteState = ({ children }) => {
  const {
    applicationData: { tags, authors, quotes }
  } = useApplicationState();

  const initialState = {
    tagList: [],
    authorList: [],
    quotes: [],
    selectedData: {
      selectedTags: [],
      selectedAuthors: []
    },
    filteredQuotes: {
      quotesByTag: [],
      quotesByAuthor: [],
      filterQuotesList: []
    },
    exploreMore: {
      exploreMoreTotalCount: 0,
      exploreMoreCurrentCount: 1,
      paginationStep: 7,
      authors: {
        exploreMoreTotalCount: 0,
        exploreMoreCurrentCount: 1
      }
    },
    styles: {
      containerHeight: 'auto'
    },
    editQuoteText: {
      editQuoteText: false,
      editedText: '',
      initiateEditQuoteTextRequest: false
    },
    displayQuotes: false,
    currentQuote: [],
    displayFilterModal: false,
    refreshFIlteredQuotes: false,
    displayQuote: true
  };
  const [state, dispatch] = useReducer(DisplayQuoteReducer, initialState);

  const {
    tagList,
    authorList,
    selectedData,
    filteredQuotes,
    exploreMore,
    styles,
    editQuoteText,
    displayQuotes,
    currentQuote,
    displayFilterModal,
    refreshFIlteredQuotes,
    displayQuote
  } = state;

  const setAuthorsState = authorData => {
    if (authorData.length > 0) {
      dispatch({
        type: 'DQ_SET_AUTHORS',
        payload: authorData
      });
    }
  };

  const setTagsState = tagsData => {
    if (tagsData.length > 0) {
      dispatch({
        type: 'DQ_SET_TAGS',
        payload: tagsData
      });
    }
  };

  const setQuotesState = quotesData => {
    if (quotesData.length > 0) {
      dispatch({
        type: 'DQ_SET_QUOTES',
        payload: quotesData
      });
    }
  };

  useEffect(() => {
    setTagsState(tags);
  }, [tags]);

  useEffect(() => {
    setAuthorsState(authors);
  }, [authors]);

  useEffect(() => {
    setQuotesState(quotes);
  }, [quotes]);

  return (
    <DisplayQuoteContext.Provider
      value={{
        tagList,
        authorList,
        selectedData,
        filteredQuotes,
        displayQuotes,
        exploreMore,
        styles,
        editQuoteText,
        currentQuote,
        displayFilterModal,
        refreshFIlteredQuotes,
        displayQuote
      }}
    >
      <DisplayQuoteDispatchContext.Provider value={dispatch}>
        {children}
      </DisplayQuoteDispatchContext.Provider>
    </DisplayQuoteContext.Provider>
  );
};

export default DisplayQuoteState;

function useDisplayQuoteState() {
  const context = useContext(DisplayQuoteContext);

  if (context === undefined) {
    throw new Error(
      'useDisplayQuoteState must be used within a SupplierDetailsProvider'
    );
  }
  return context;
}

function useDisplayQuoteDispatch() {
  const context = useContext(DisplayQuoteDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useDisplayQuoteDispatch must be used within a SupplierDetailsDispatchProvider'
    );
  }
  return context;
}

export { DisplayQuoteState, useDisplayQuoteDispatch, useDisplayQuoteState };
