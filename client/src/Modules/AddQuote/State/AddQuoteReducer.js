import {
	SET_QUOTE,
	SET_AUTHOR,
	SET_TAG,
	SET_NEWTAG,
	TOGGLE_ADDNEWTAG,
	ADD_NEW_TAGS,
} from "Modules/AddQuote/State/types.js";
import { produce } from "immer";

export default (state, action) => {
	switch (action.type) {
		case SET_QUOTE:
			return {
				...state,
				quote: action.quoteText,
			};
		case SET_AUTHOR:
			return {
				...state,
				author: action.authorName,
			};
		case SET_TAG:
			return produce(state, (draftState) => {
				console.log(action.payload);
				draftState.tagDetails.forEach((tag) => {
					if (tag.tagName === action.payload) {
						tag.selected = !tag.selected;
					}
				});
			});
		case SET_NEWTAG:
			return {
				...state,
				newTagText: action.payload,
			};
		case TOGGLE_ADDNEWTAG:
			return {
				...state,
				addNewTag: !state.addNewTag,
			};

		case ADD_NEW_TAGS:
			return produce(state, (draftState) => {
				draftState.newTagText.split(",").forEach((tag) => {
					var obj = { tagName: tag, selected: true };
					console.log(obj);
					draftState.tagDetails.push(obj);
				});
				draftState.addNewTag = false;
				draftState.newTagText = "";
			});
	}
};
