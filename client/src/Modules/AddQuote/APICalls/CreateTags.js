import React, { useEffect } from 'react';
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';
import axios from 'axios';
import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

const CreateTags = () => {
  const {
    newTagsAdded,
    initiateNewTagCreation,
    newUploadedTags,
    newTagsCount
  } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();
  const { sendStepStatusRequest } = useStepStatusRequest();

  useEffect(() => {
    if (initiateNewTagCreation) {
      prepareNewTagCreation(newTagsAdded);
    }
  }, [initiateNewTagCreation]);

  useEffect(() => {
    if (newTagsCount !== 0 && newTagsCount === newUploadedTags.length) {
      sendStepStatusRequest(
        'AddQuote | New tags added to DB | Initiate quote creation',
        'success'
      );
      return dispatch({
        type: 'AQ_INITIATE_ADD_QUOTE'
      });
    }
  }, [newUploadedTags, newTagsCount]);

  const prepareNewTagCreation = newTagsAdded => {
    const arrayOfPromises = newTagsAdded.map(tag => {
      addTagToDB(tag);
    });
    Promise.all(arrayOfPromises).then(() => {
      console.log('Tag upload done');
    });
  };

  const addTagToDB = async tag => {
    const body = JSON.stringify({
      tagName: tag.tagName
    });
    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };
    const res = await axios.post('/api/v1/tag', body, config);
    sendStepStatusRequest('Tag added successfully', 'success');

    let uploadedTag = res.data.data.data;

    dispatch({
      type: 'AQ_ADD_NEWTAG_TO_STATE',
      payload: { ...uploadedTag, selected: true }
    });
  };
  return <div></div>;
};

export default CreateTags;
