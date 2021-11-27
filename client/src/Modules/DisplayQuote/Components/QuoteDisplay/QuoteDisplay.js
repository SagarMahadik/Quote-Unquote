import React, { useEffect, useState } from 'react';

import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import {
  QuoteContainer,
  QuotePageContainer,
  QuotePageOverlay,
  QuotePageTagContainer,
  QuotePageTagText,
  QuoteText
} from './Styles/QuotePageStyles';
import { useDoubleTap } from 'use-double-tap';
import { makeFirstLetterUpperCase } from 'Utils/stringOperations.js';
import AuthorInfoDrawer from './Styles/Molecules/AuthorInfoDrawer';
import ActionIcons from './Styles/Molecules/ActionIcons';
import FilterDrawer from './Styles/Molecules/FilterDrawer';
import { CenterAlignedFlexStartColumnContainer } from 'BennyStyleLibrary/Global/containerStyles';

const QuoteDisplay = () => {
  const [displayAuthorProfile, setDisplayAuthorProfile] = React.useState(false);
  const [displayOverlay, setDisplayOverlay] = React.useState(false);
  const [displayActionButtons, setDisplayActionButtons] = useState(false);
  const {
    filteredQuotes: { filterQuotesList },
    displayFilterModal
  } = useDisplayQuoteState();

  const dispatch = useDisplayQuoteDispatch();

  useEffect(() => {
    if (filterQuotesList.length === 0) {
      dispatch({
        type: 'DQ_CREATE_FILTEREDQUOTES'
      });
    }
  }, [filterQuotesList]);

  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.onpopstate = e => {
      dispatch({ type: 'DQ_RESET_QUOTE_STATE' });
      history.push('/moodPage');
    };
  }, []);

  const variants = {
    enter: direction => {
      return {
        x: direction == 1 ? 100 : -100
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: direction => {
      return {
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const quoteIndex = wrap(0, filterQuotesList.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  const bind = useDoubleTap(event => {
    setDisplayActionButtons(!displayActionButtons);
  });

  return (
    <QuotePageContainer>
      {filterQuotesList.length > 0 ? (
        <>
          <AnimatePresence>
            {displayOverlay || (displayFilterModal && <QuotePageOverlay />)}
          </AnimatePresence>
          <AnimatePresence>
            <QuoteContainer
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: 'spring',
                  stiffness: 200,
                  damping: 20
                },
                opacity: { duration: 0 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              {...bind}
            >
              {filterQuotesList.length > 0 && (
                <>
                  <QuoteText>{filterQuotesList[quoteIndex].quote}</QuoteText>
                  <QuotePageTagContainer>
                    <>
                      <QuotePageTagText
                        onClick={() => {
                          setDisplayOverlay(true);
                          setDisplayAuthorProfile(true);
                        }}
                      >
                        {makeFirstLetterUpperCase(
                          filterQuotesList[quoteIndex].author['authorName']
                        )}
                      </QuotePageTagText>
                    </>
                    {filterQuotesList[quoteIndex].tags.map(
                      ({ tagName, _id }) => {
                        return (
                          <QuotePageTagText key={_id}>
                            {' '}
                            | {makeFirstLetterUpperCase(tagName)}
                          </QuotePageTagText>
                        );
                      }
                    )}
                  </QuotePageTagContainer>
                </>
              )}
            </QuoteContainer>
          </AnimatePresence>
          <AnimatePresence>
            {displayAuthorProfile && (
              <AuthorInfoDrawer
                authorImageUrl={
                  filterQuotesList[quoteIndex].author['authorImageUrl']
                }
                authorBio={filterQuotesList[quoteIndex].author['authorBio']}
                onClick={() => {
                  setDisplayOverlay(false);
                  setDisplayAuthorProfile(false);
                }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {displayActionButtons && (
              <ActionIcons
                currentQuote={filterQuotesList[quoteIndex].quote}
                currentAuthor={
                  filterQuotesList[quoteIndex].author['authorName']
                }
              />
            )}
          </AnimatePresence>
          <>
            <FilterDrawer />
          </>
        </>
      ) : (
        <CenterAlignedFlexStartColumnContainer
          width="80%"
          height="20vh"
          borderRadius="10px"
          background="rgba(255,255,255,0.2)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
        />
      )}
    </QuotePageContainer>
  );
};

export default QuoteDisplay;
