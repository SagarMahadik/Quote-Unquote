import React, { useReducer, useContext, useEffect, useState } from 'react';
import {
  DisplayQuoteContext,
  DisplayQuoteDispatchContext
} from 'Modules/DisplayQuote/State/DisplayQuoteContext.js';
import DisplayQuoteReducer from 'Modules/DisplayQuote/State/DisplayQuoteReducer.js';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import { shuffleArray } from './../../../Utils/shuffleArray';

const DisplayQuoteState = ({ children }) => {
  const {
    applicationData: { tags, authors, quotes }
  } = useApplicationState();

  const setIntroAnimationDisplayState = () => {
    if (localStorage.getItem('hasSeenIntroAnimation') === 'Y') {
      return false;
    } else {
      return true;
    }
  };

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
      initiateEditQuoteTextRequest: false,
      editQoteSuccessSound: false
    },
    deleteQuote: {
      deleteQuote: false,
      dragStart: false,
      initiateDeleteQuoteRequest: false,
      deleteRequestSuccess: false,
      trashAnimatation: false,
      tickAnimation: false,
      QuoteID: '',
      completeDelete: false
    },
    moodPageActiveTab: 'authors',
    displayQuotes: false,
    currentQuote: [],
    displayFilterModal: false,
    displayOverlay: false,
    refreshFIlteredQuotes: false,
    displayQuote: true,
    selectQuotePostDelete: false,
    filteredQuotesLoaded: false,
    displayAuthorProfile: false,
    displayActionButtons: false,
    displayIntroAnimation: setIntroAnimationDisplayState()
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
    deleteQuote,
    displayQuotes,
    currentQuote,
    displayFilterModal,
    refreshFIlteredQuotes,
    displayQuote,
    selectQuotePostDelete,
    filteredQuotesLoaded,
    displayIntroAnimation,
    displayOverlay,
    displayAuthorProfile,
    displayActionButtons,
    moodPageActiveTab
  } = state;

  const setAuthorsState = authorData => {
    if (authorData.length > 0) {
      dispatch({
        type: 'DQ_SET_AUTHORS',
        payload: [...authorData].sort((a, b) =>
          (a['authorName'] || '')
            .toString()
            .localeCompare((b['authorName'] || '').toString())
        )
      });
    }
  };

  const setTagsState = tagsData => {
    if (tagsData.length > 0) {
      dispatch({
        type: 'DQ_SET_TAGS',
        payload: shuffleArray([...tagsData])
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
        deleteQuote,
        currentQuote,
        displayFilterModal,
        refreshFIlteredQuotes,
        displayQuote,
        selectQuotePostDelete,
        filteredQuotesLoaded,
        displayIntroAnimation,
        displayOverlay,
        displayAuthorProfile,
        displayActionButtons,
        dispatch,
        moodPageActiveTab
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
