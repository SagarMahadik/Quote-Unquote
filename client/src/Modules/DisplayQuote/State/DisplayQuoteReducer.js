import {
  DQ_QUOTE_DELETE_REQUEST_SUCCESS,
  DQ_DELETE_DRAGSTART_RESET,
  DQ_SET_TAGS,
  DQ_SET_AUTHORS,
  DQ_SET_QUOTES,
  DQ_HANDLE_CLICK_TAG,
  DQ_HANDLE_TAP_SET_AUTHORTAG,
  DQ_HANDLE_TAP_REMOVE_AUTHORTAG,
  DQ_HANDLE_CLICK_AUTHOR,
  DQ_CREATE_FILTEREDQUOTES,
  DQ_TOGGLE_MOODPAGE,
  DQ_SET_CURRENT_QUOTE,
  DQ_TOGGLE_FILTERMODAL,
  DQ_REFRESH_FILTEREDQUOTES,
  DQ_SET_TAGCONTAINER_SCRLLHEIGHT,
  DQ_TAG_INC_EXPLOREMORE_COUNT,
  DQ_SET_TAGCONTAINERHEIGHT,
  DQ_RESET_TAG_EXPLOREMORE_COUNT,
  DQ_AUTHOR_INC_EXPLOREMORE_COUNT,
  DQ_RESET_AUTHOR_EXPLOREMORE_COUNT,
  HIDE_QUOTE,
  DQ_SET_MAINCONTAINERHEIGHT,
  DQ_TOGGLE_EDIT_QUOTETEXT,
  DQ_SET_EDIT_QUOTETEXT,
  DQ_INITIATE_EDITQUOTETEXT,
  DQ_HANDLE_EDITQUOTESUCCESS,
  DQ_RSEST_EDIT_QUOTETEXT_STATE,
  DQ_DELETE_DRAGSTART,
  DQ_DELETE_DRAGEND,
  DQ_RESET_QUOTES_POST_DELETE,
  DQ_RESET_SELECTQUOTES_POST_DELETE,
  DQ_DELETE_RESET,
  DQ_INITIATE_DELETE_REQUEST,
  DQ_RESET_QUOTE_STATE,
  DQ_UNSET_QUOTE_STATE,
  DQ_HIDE_INTROANIMATION,
  DQ_TOGGLE_ACTIONBUTTONS,
  DQ_TOGGLE_AUTHORPROFILEDRAWER,
  DQ_MOODPAGE_SET_ACTIVETAB
} from 'Modules/DisplayQuote/State/types.js';
import { produce } from 'immer';

import { shuffleArray } from 'Utils/shuffleArray';

export default (state, action) => {
  switch (action.type) {
    case DQ_SET_TAGS:
      return produce(state, draftState => {
        draftState.tagList = action.payload;
        draftState.exploreMore.explreMoreTotalCount = Math.ceil(
          draftState.tagList.length / draftState.exploreMore.paginationStep
        );
      });

    case DQ_SET_AUTHORS:
      return produce(state, draftState => {
        draftState.authorList = action.payload;
        draftState.exploreMore.authors.exploreMoreTotalCount = Math.ceil(
          draftState.authorList.length / draftState.exploreMore.paginationStep
        );
      });
    case DQ_SET_QUOTES:
      return produce(state, draftState => {
        draftState.quotes = action.payload;
      });
    case DQ_HANDLE_CLICK_TAG:
      return produce(state, draftState => {
        draftState.tagList.forEach(tag => {
          if (tag.tagName === action.payload) {
            tag.selected = !tag.selected;
          }
        });
      });

    case DQ_HANDLE_TAP_SET_AUTHORTAG:
      return produce(state, draftState => {
        draftState.authorList.forEach(author => {
          if (author.authorName === action.payload) {
            author.tapped = true;
          }
        });
      });

    case DQ_HANDLE_TAP_REMOVE_AUTHORTAG:
      return produce(state, draftState => {
        draftState.authorList.forEach(author => {
          if (author.authorName === action.payload) {
            author.tapped = false;
          }
        });
      });

    case DQ_HANDLE_CLICK_AUTHOR:
      return produce(state, draftState => {
        draftState.authorList.forEach(author => {
          if (author.authorName === action.payload) {
            author.selected = !author.selected;
          }
        });
      });

    case DQ_TOGGLE_MOODPAGE:
      return produce(state, draftState => {
        draftState.displayQuotes = !draftState.displayQuotes;
      });

    case DQ_TOGGLE_FILTERMODAL:
      return produce(state, draftState => {
        draftState.displayFilterModal = !draftState.displayFilterModal;
        draftState.displayOverlay = !draftState.displayOverlay;
      });

    case DQ_CREATE_FILTEREDQUOTES:
      return produce(state, draftState => {
        draftState.displayFilterModal = false;
        draftState.displayOverlay = false;
        draftState.filteredQuotes.filterQuotesList = [];
        draftState.selectedData.selectedTags = [];
        draftState.selectedData.selectedAuthors = [];

        draftState.selectedTags = draftState.tagList.filter(
          tag => tag.selected
        );

        draftState.selectedAuthors = draftState.authorList.filter(
          author => author.selected
        );

        draftState.selectedTags.forEach(tag =>
          draftState.selectedData.selectedTags.push(tag._id)
        );

        draftState.selectedAuthors.forEach(({ _id }) =>
          draftState.selectedData.selectedAuthors.push(_id)
        );

        let quotesByAuthorNames = draftState.selectedData.selectedAuthors
          .map(a => draftState.quotes.filter(quote => quote.author === a))
          .flat();

        let quotesByTags = draftState.selectedData.selectedTags
          .map(t =>
            draftState.quotes.filter(quote => quote.tags.find(tg => tg === t))
          )
          .flat();

        function shuffle(array) {
          for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }

          return array;
        }

        let finalArray = [];
        if (
          draftState.selectedData.selectedTags.length === 0 &&
          draftState.selectedData.selectedAuthors.length === 0
        ) {
          finalArray = [...draftState.quotes];
        } else {
          finalArray = [...quotesByAuthorNames, ...quotesByTags];
        }

        draftState.filteredQuotes.filterQuotesList = shuffle([
          ...new Set(finalArray)
        ]);
        draftState.refreshFIlteredQuotes = true;
        draftState.displayQuotes = true;
        draftState.filteredQuotesLoaded = true;
      });

    case DQ_SET_CURRENT_QUOTE:
      return produce(state, draftState => {
        draftState.currentQuote = [];
        draftState.currentQuote.push(action.payload);
        draftState.displayQuote = true;
      });

    case DQ_REFRESH_FILTEREDQUOTES:
      return produce(state, draftState => {
        draftState.refreshFIlteredQuotes = true;
      });

    case DQ_TAG_INC_EXPLOREMORE_COUNT:
      return produce(state, draftState => {
        draftState.exploreMore.exploreMoreCurrentCount =
          draftState.exploreMore.exploreMoreCurrentCount + 1;
      });
    case DQ_RESET_TAG_EXPLOREMORE_COUNT:
      return produce(state, draftState => {
        draftState.exploreMore.exploreMoreCurrentCount = 1;
      });
    case DQ_AUTHOR_INC_EXPLOREMORE_COUNT:
      return produce(state, draftState => {
        draftState.exploreMore.authors.exploreMoreCurrentCount =
          draftState.exploreMore.authors.exploreMoreCurrentCount + 1;
      });
    case DQ_RESET_AUTHOR_EXPLOREMORE_COUNT:
      return produce(state, draftState => {
        draftState.exploreMore.authors.exploreMoreCurrentCount = 1;
      });
    case HIDE_QUOTE:
      return produce(state, draftState => {
        draftState.displayQuote = false;
      });

    case DQ_SET_MAINCONTAINERHEIGHT:
      return produce(state, draftState => {
        draftState.styles.containerHeight = action.payload;
      });
    case DQ_TOGGLE_EDIT_QUOTETEXT:
      return produce(state, draftState => {
        draftState.editQuoteText.editQuoteText = !draftState.editQuoteText
          .editQuoteText;
        draftState.editQuoteText.editQoteSuccessSound = false;
        draftState.selectQuotePostDelete = false;
        //draftState.deleteQuote.deleteRequestSuccess = true;
      });

    case DQ_RSEST_EDIT_QUOTETEXT_STATE:
      return produce(state, draftState => {
        draftState.editQuoteText.editQuoteText = false;
        draftState.editQuoteText.initiateEditQuoteTextRequest = false;
      });
    case DQ_SET_EDIT_QUOTETEXT:
      return produce(state, draftState => {
        draftState.editQuoteText.editedText = action.payload;
      });

    case DQ_INITIATE_EDITQUOTETEXT:
      return produce(state, draftState => {
        draftState.editQuoteText.initiateEditQuoteTextRequest = true;
      });

    case DQ_HANDLE_EDITQUOTESUCCESS:
      return produce(state, draftState => {
        draftState.quotes.forEach(q => {
          if (q._id === action.payload.quoteID) {
            q.quote = action.payload.quote;
          }
        });
        draftState.filteredQuotes.filterQuotesList.forEach(q => {
          if (q._id === action.payload.quoteID) {
            q.quote = action.payload.quote;
          }
        });
        draftState.currentQuote[0].quote = action.payload.quote;
        draftState.editQuoteText.editQuoteText = false;
        draftState.editQuoteText.editQoteSuccessSound = true;
        draftState.editQuoteText.editedText = false;
        draftState.editQuoteText.initiateEditQuoteTextRequest = false;
      });

    case DQ_DELETE_DRAGSTART:
      return produce(state, draftState => {
        draftState.deleteQuote.deleteQuote = true;
        draftState.deleteQuote.dragStart = true;
        draftState.editQuoteText.editQuoteText = false;
        draftState.deleteQuote.trashAnimatation = true;
      });

    case DQ_DELETE_DRAGSTART_RESET:
      return produce(state, draftState => {
        draftState.deleteQuote.deleteQuote = false;
        draftState.deleteQuote.dragStart = false;
        draftState.editQuoteText.editQuoteText = true;
      });

    case DQ_DELETE_DRAGEND:
      return produce(state, draftState => {
        draftState.editQuoteText.editQuoteText = true;
        draftState.deleteQuote.QuoteID = draftState.currentQuote[0]._id;
        draftState.currentQuote = [];
        draftState.deleteQuote.trashAnimatation = false;
        draftState.deleteQuote.dragStart = false;
        draftState.deleteQuote.initiateDeleteQuoteRequest = true;
      });

    case DQ_RESET_QUOTES_POST_DELETE:
      return produce(state, draftState => {
        draftState.selectQuotePostDelete = true;
        draftState.filteredQuotes.filterQuotesList = draftState.filteredQuotes.filterQuotesList.filter(
          q => q._id != action.payload
        );
        draftState.quotes = draftState.quotes.filter(
          q => q._id != action.payload
        );
        draftState.deleteQuote.QuoteID = '';
        draftState.editQuoteText.editQuoteText = false;
        draftState.editQuoteText.editQoteSuccessSound = true;
        draftState.editQuoteText.editedText = false;
        draftState.deleteQuote.initiateDeleteQuoteRequest = false;
        draftState.deleteQuote.deleteRequestSuccess = false;
        draftState.selectQuotePostDelete = true;
      });

    case DQ_QUOTE_DELETE_REQUEST_SUCCESS:
      return produce(state, draftState => {
        draftState.deleteQuote.deleteRequestSuccess = true;
      });

    case DQ_DELETE_RESET:
      return produce(state, draftState => {
        draftState.selectQuotePostDelete = false;
        draftState.deleteQuote.deleteRequestSuccess = false;
        draftState.deleteQuote.tickAnimation = false;
      });
    case DQ_INITIATE_DELETE_REQUEST:
      return produce(state, draftState => {
        draftState.deleteQuote.initiateDeleteQuoteRequest = true;
      });

    case DQ_RESET_QUOTE_STATE:
      return produce(state, draftState => {
        draftState.displayQuotes = false;
        draftState.displayQuote = false;
        draftState.currentQuote = [];
      });
    case DQ_HIDE_INTROANIMATION:
      return produce(state, draftState => {
        draftState.displayIntroAnimation = false;
      });
    case DQ_TOGGLE_ACTIONBUTTONS:
      return produce(state, draftState => {
        draftState.displayActionButtons = !draftState.displayActionButtons;
      });

    case DQ_TOGGLE_AUTHORPROFILEDRAWER:
      return produce(state, draftState => {
        draftState.displayOverlay = !draftState.displayOverlay;
        draftState.displayAuthorProfile = !draftState.displayAuthorProfile;
      });

    case DQ_MOODPAGE_SET_ACTIVETAB:
      return produce(state, draftState => {
        draftState.moodPageActiveTab = action.payload;
      });
  }
};
