import {
  DQ_SET_TAGS,
  DQ_SET_AUTHORS,
  DQ_SET_QUOTES,
  DQ_HANDLE_CLICK_TAG,
  DQ_HANDLE_CLICK_AUTHOR,
  DQ_CREATE_FILTEREDQUOTES
} from 'Modules/DisplayQuote/State/types.js';
import { produce } from 'immer';

export default (state, action) => {
  switch (action.type) {
    case DQ_SET_TAGS:
      return produce(state, draftState => {
        draftState.tagList = action.payload;
      });

    case DQ_SET_AUTHORS:
      return produce(state, draftState => {
        draftState.authorList = action.payload;
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
    case DQ_CREATE_FILTEREDQUOTES:
      return produce(state, draftState => {
        draftState.selectedTags = draftState.tagList.filter(
          tag => tag.selected
        );

        draftState.selectedTags.forEach(tag =>
          draftState.selectedData.selectedTags.push(tag.tagName)
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

        let finalArray = [...quotesByAuthorNames, ...quotesByTags];
        console.log(finalArray);
        draftState.filteredQuotes.filterQuotesList = [...new Set(finalArray)];
      });
  }
};
