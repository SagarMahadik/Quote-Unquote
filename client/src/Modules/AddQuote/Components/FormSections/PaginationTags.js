import React from 'react';
import {
  ExploreMoreButton,
  ExploreMoreButtonContainer
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js';

import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';

const PaginationTags = () => {
  const {
    exploreMore: {
      exploreMoreTagsTotalCount,
      exploreMoreTagsCurrentCount,
      paginationStep
    }
  } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();

  const handlePagination = () => {
    if (exploreMoreTagsCurrentCount == exploreMoreTagsTotalCount) {
      dispatch({
        type: 'AQ_RESET_EXPLOREMORE_TAG_COUNT'
      });
    } else {
      dispatch({
        type: 'AQ_INC_EXPLOREMORE_TAG_COUNT'
      });
    }
  };

  return (
    <ExploreMoreButtonContainer>
      <ExploreMoreButton onClick={() => handlePagination()}>
        {exploreMoreTagsTotalCount != 0 &&
        exploreMoreTagsCurrentCount != exploreMoreTagsTotalCount
          ? 'Explore More'
          : 'See Less'}
      </ExploreMoreButton>
    </ExploreMoreButtonContainer>
  );
};

export default PaginationTags;
