import {
  DQ_SET_TAGS,
  DQ_SET_AUTHORS,
  DQ_SET_QUOTES,
  DQ_HANDLE_CLICK_TAG,
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
  DQ_RSEST_EDIT_QUOTETEXT_STATE
} from 'Modules/DisplayQuote/State/types.js';
import { produce } from 'immer';

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
        draftState.refreshFIlteredQuotes = false;
      });

    case DQ_CREATE_FILTEREDQUOTES:
      return produce(state, draftState => {
        draftState.displayQuotes = true;
        draftState.displayFilterModal = false;
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
          draftState.selectedData.selectedTags.push(tag.tagName)
        );

        draftState.selectedAuthors.forEach(({ authorName }) =>
          draftState.selectedData.selectedAuthors.push(authorName)
        );

        let quotesByAuthorNames = draftState.selectedData.selectedAuthors
          .map(a =>
            draftState.quotes.filter(quote => quote.author.authorName === a)
          )
          .flat();
        let quotesByTags = draftState.selectedData.selectedTags
          .map(t =>
            draftState.quotes.filter(quote =>
              quote.tags.find(tg => tg.tagName === t)
            )
          )
          .flat();

        let finalArray = [];
        if (
          draftState.selectedData.selectedTags.length === 0 &&
          draftState.selectedData.selectedAuthors.length === 0
        ) {
          finalArray = [...draftState.quotes];
        } else {
          finalArray = [...quotesByAuthorNames, ...quotesByTags];
        }

        console.log(finalArray);
        draftState.filteredQuotes.filterQuotesList = [...new Set(finalArray)];
        draftState.refreshFIlteredQuotes = true;
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
        draftState.editQuoteText.editedText = false;
        draftState.editQuoteText.initiateEditQuoteTextRequest = false;
      });
  }
};
