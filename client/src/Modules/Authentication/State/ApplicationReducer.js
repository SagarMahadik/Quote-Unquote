import {
  SET_TAGS,
  SET_AUTHORS,
  SET_QUOTES
} from 'Modules/Authentication/State/types.js';
import produce from 'immer';

export default (state, action) => {
  switch (action.type) {
    case SET_TAGS:
      return produce(state, draftState => {
        draftState.applicationData.tags = action.payload;
      });
    case SET_AUTHORS:
      return produce(state, draftState => {
        draftState.applicationData.authors = action.payload;
      });
    case SET_QUOTES:
      return produce(state, draftState => {
        draftState.applicationData.quotes = action.payload;
      });
  }
};
