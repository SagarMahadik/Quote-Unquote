import React from 'react';
import {
  ExploreMoreButton,
  ExploreMoreButtonContainer
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js';

import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

const PaginationAuthors = () => {
  const {
    tagList,
    exploreMore: {
      authors: { exploreMoreTotalCount, exploreMoreCurrentCount },
      paginationStep
    }
  } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const handlePagination = () => {
    if (exploreMoreCurrentCount == exploreMoreTotalCount) {
      dispatch({
        type: 'DQ_RESET_AUTHOR_EXPLOREMORE_COUNT'
      });
    } else {
      dispatch({
        type: 'DQ_AUTHOR_INC_EXPLOREMORE_COUNT'
      });
    }
  };

  return (
    <ExploreMoreButtonContainer>
      <ExploreMoreButton onClick={() => handlePagination()}>
        {exploreMoreTotalCount != 0 &&
        exploreMoreCurrentCount != exploreMoreTotalCount
          ? 'Explore More'
          : 'See Less'}
      </ExploreMoreButton>
    </ExploreMoreButtonContainer>
  );
};

export default PaginationAuthors;
