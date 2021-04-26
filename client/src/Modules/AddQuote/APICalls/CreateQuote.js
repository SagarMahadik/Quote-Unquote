import React, { useEffect } from 'react';
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';

import axios from 'axios';

const CreateQuote = () => {
  const {
    quote,
    quoteAuthorID,
    applicationData: { tagList },
    newUploadedTags,
    initiateQuoteCreation
  } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();
  useEffect(() => {
    if (initiateQuoteCreation) {
      prepareQuoteCreation(tagList, newUploadedTags);
    }
  }, [initiateQuoteCreation]);

  const prepareQuoteCreation = (tagList, newUploadedTags) => {
    console.log(newUploadedTags);
    let tags = [];
    let selectedTagsInForm = tagList.filter(tag => tag.selected && !tag.newTag);

    if (selectedTagsInForm.length > 0) {
      selectedTagsInForm.map(t => tags.push(t._id));
    }

    let newlyUploadedTagsID = newUploadedTags.map(tag => tags.push(tag._id));
    console.log(tags);

    addQuoteToDB(quote, quoteAuthorID, tags);
  };

  const addQuoteToDB = async (quote, quoteAuthorID, tags) => {
    const body = JSON.stringify({
      quote,
      author: quoteAuthorID,
      tags
    });
    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };
    const res = await axios.post('/api/v1/quote', body, config);
    console.log(res);
    if (res.data.status === 'success') {
      dispatch({
        type: 'AQ_QUOTE_ADDED_TO_DB'
      });
    }
  };

  return <div></div>;
};

export default CreateQuote;
