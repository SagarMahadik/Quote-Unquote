import React from 'react';
import {
  ExploreMoreButton,
  ExploreMoreButtonContainer
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js';

import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

const PaginationTags = () => {
  const {
    tagList,
    exploreMore: {
      explreMoreTotalCount,
      exploreMoreCurrentCount,
      paginationStep
    }
  } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const handlePagination = () => {
    if (exploreMoreCurrentCount == explreMoreTotalCount) {
      dispatch({
        type: 'DQ_RESET_TAG_EXPLOREMORE_COUNT'
      });
    } else {
      dispatch({
        type: 'DQ_TAG_INC_EXPLOREMORE_COUNT'
      });
    }
  };

  return (
    <ExploreMoreButtonContainer>
      <ExploreMoreButton onClick={() => handlePagination()}>
        {explreMoreTotalCount != 0 &&
        exploreMoreCurrentCount != explreMoreTotalCount
          ? 'Explore More'
          : 'See Less'}
      </ExploreMoreButton>
    </ExploreMoreButtonContainer>
  );
};

export default PaginationTags;
