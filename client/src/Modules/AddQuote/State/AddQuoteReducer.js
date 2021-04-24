import {
  SET_QUOTE,
  SET_ANONYMOUSAUTHOR,
  SET_AUTHOR,
  SET_TAG,
  SET_NEWTAG,
  TOGGLE_ADDNEWTAG,
  ADD_NEW_TAGS,
  AQ_SET_TAGS,
  AQ_SET_AUTHORS,
  UPDATE_SEARCHSTRING,
  UPDATE_SEARCHRESULTS,
  CLEAR_SEARCHRESULTS,
  AQ_INITIATE_VALIDATIONS,
  AQ_SET_VALIDATION_ERROR,
  AQ_REMOVE_VALIDATION_ERROR,
  AQ_VALIDATION_COMPLETE,
  AQ_SET_ANONYMOUS_QUOTE_AUTHOR,
  AQ_SET_ANONYMOUS_AUTHOR_REQUIRED
} from 'Modules/AddQuote/State/types.js';
import { produce } from 'immer';

export default (state, action) => {
  switch (action.type) {
    case AQ_SET_TAGS:
      return produce(state, draftState => {
        draftState.applicationData.tagList = action.payload;
      });

    case AQ_SET_AUTHORS:
      return produce(state, draftState => {
        draftState.applicationData.authorList = action.payload;
      });

    case SET_QUOTE:
      return {
        ...state,
        quote: action.quoteText
      };
    case SET_AUTHOR:
      const { authorName, authorID } = action.payload;
      return produce(state, draftState => {
        draftState.authorSearch.searchString = authorName;
        draftState.authorSearch.searchResults = [];
        draftState.quoteAuthorID = authorID;
        draftState.quoteAuthor = authorName;
      });

    case SET_ANONYMOUSAUTHOR:
      return produce(state, draftState => {
        draftState.anonymousAuthorID = action.payload;
      });

    case AQ_SET_ANONYMOUS_QUOTE_AUTHOR:
      return produce(state, draftState => {
        draftState.quoteAuthorID = draftState.anonymousAuthorID;
        draftState.initiateTagsCheck = true;
        draftState.anonymousAuthorSet = true;
      });

    case SET_TAG:
      return produce(state, draftState => {
        console.log(action.payload);
        draftState.applicationData.tagList.forEach(tag => {
          if (tag.tagName === action.payload) {
            tag.selected = !tag.selected;
          }
        });
      });
    case SET_NEWTAG:
      return {
        ...state,
        newTagText: action.payload
      };
    case TOGGLE_ADDNEWTAG:
      return {
        ...state,
        addNewTag: !state.addNewTag
      };

    case ADD_NEW_TAGS:
      return produce(state, draftState => {
        draftState.newTagText.split(',').forEach(tag => {
          var obj = { tagName: tag, selected: true, newTag: true };
          console.log(obj);
          draftState.applicationData.tagList.push(obj);
        });
        draftState.addNewTag = false;
        draftState.newTagText = '';
      });

    case UPDATE_SEARCHSTRING:
      return produce(state, draftState => {
        draftState.authorSearch.searchString = action.payload;
      });

    case UPDATE_SEARCHRESULTS:
      return produce(state, draftState => {
        draftState.authorSearch.searchResults = action.payload;
      });

    case CLEAR_SEARCHRESULTS:
      return produce(state, draftState => {
        draftState.authorSearch.searchResults = action.payload;
        draftState.authorSearch.searchString = '';
        draftState.quoteAuthorID = '';
        draftState.quoteAuthor = '';
      });

    case AQ_INITIATE_VALIDATIONS:
      return produce(state, draftState => {
        draftState.initiateValidations = true;
      });

    case AQ_SET_VALIDATION_ERROR:
      return produce(state, draftState => {
        draftState.requiredFieldsError.quote = true;
        draftState.initiateValidations = false;
      });

    case AQ_REMOVE_VALIDATION_ERROR:
      return produce(state, draftState => {
        draftState.requiredFieldsError.quote = false;
      });

    case AQ_VALIDATION_COMPLETE:
      return produce(state, draftState => {
        draftState.validationsComplete = true;
        draftState.initiateRequestCreation = true;
      });

    case AQ_SET_ANONYMOUS_AUTHOR_REQUIRED:
      return produce(state, draftState => {
        draftState.anonymousAuthorRequired = true;
      });
    default:
      return {
        ...state
      };
  }
};
