import React, { useEffect, useState } from 'react';

import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import {
  QuoteAuthorImageContainer,
  QuoteContainer,
  QuotePageContainer,
  QuotePageOverlay,
  QuotePageTagContainer,
  QuotePageTagText,
  QuoteText,
  QuoteAuthorImage,
  AuthorImageOverLay
} from './Styles/QuotePageStyles';
import { useDoubleTap } from 'use-double-tap';
import { makeFirstLetterUpperCase } from 'Utils/stringOperations.js';
import AuthorInfoDrawer from './Styles/Molecules/AuthorInfoDrawer';
import ActionIcons from './Styles/Molecules/ActionIcons';
import FilterDrawer from './Styles/Molecules/FilterDrawer';
import {
  CenterAlignedColumnContainer,
  CenterAlignedFlexStartColumnContainer
} from 'BennyStyleLibrary/Global/containerStyles';
import IntroAnimation from './IntroAnimation';
import QuotePageOverlayAnimation from './Styles/Molecules/QuotePageOverlayAnimation';
import Div100vh from 'react-div-100vh';
import { MotionImage } from 'BennyStyleLibrary/Global/rootStyles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { playVibrations } from './../../../../Utils/vibrations';

const QuoteDisplay = () => {
  const {
    filteredQuotes: { filterQuotesList },
    displayFilterModal,
    displayIntroAnimation,
    displayActionButtons,
    displayOverlay,
    displayAuthorProfile
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
    dispatch({ type: 'DQ_TOGGLE_ACTIONBUTTONS' });
  });

  return (
    <Div100vh>
      <QuotePageContainer>
        {filterQuotesList.length > 0 ? (
          <>
            <AnimatePresence>
              <QuotePageOverlayAnimation display={displayOverlay} />
            </AnimatePresence>

            {displayIntroAnimation && <IntroAnimation />}

            <AnimatePresence initial="false">
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
                    <QuoteAuthorImageContainer>
                      <AuthorImageOverLay />
                      <QuoteAuthorImage
                        initial="enter"
                        animate="center"
                        exit="exit"
                        src={
                          filterQuotesList[quoteIndex].author['authorImageUrl']
                        }
                      />
                    </QuoteAuthorImageContainer>
                    <CenterAlignedColumnContainer
                      width="96%"
                      height="200px"
                      marginTop="-200px"
                    >
                      <QuoteText>
                        {filterQuotesList[quoteIndex].quote}
                      </QuoteText>
                    </CenterAlignedColumnContainer>
                    <QuotePageTagContainer
                      key={page}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 30
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
                    >
                      <CenterAlignedColumnContainer marginTop="4px">
                        <QuotePageTagText
                          onClick={() => {
                            playVibrations(6);
                            dispatch({ type: 'DQ_TOGGLE_AUTHORPROFILEDRAWER' });
                          }}
                        >
                          {makeFirstLetterUpperCase(
                            filterQuotesList[quoteIndex].author['authorName']
                          )}
                        </QuotePageTagText>
                        <CenterAlignedFlexStartColumnContainer
                          height="1px"
                          backgroundColor="rgba(255,255,255,0.9)"
                          width="98%"
                        ></CenterAlignedFlexStartColumnContainer>
                      </CenterAlignedColumnContainer>
                      {filterQuotesList[quoteIndex].tags.map(
                        ({ tagName, _id }) => {
                          return (
                            <CenterAlignedColumnContainer marginTop="4px">
                              <QuotePageTagText key={_id}>
                                | {makeFirstLetterUpperCase(tagName)}
                              </QuotePageTagText>
                              <CenterAlignedFlexStartColumnContainer
                                height="1px"
                                backgroundColor="rgba(255,255,255,0.9)"
                                width="80%"
                                marginLeft="8px"
                              ></CenterAlignedFlexStartColumnContainer>
                            </CenterAlignedColumnContainer>
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
                  onClick={() =>
                    dispatch({ type: 'DQ_TOGGLE_AUTHORPROFILEDRAWER' })
                  }
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
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1
            }}
          />
        )}
      </QuotePageContainer>
    </Div100vh>
  );
};

export default QuoteDisplay;
