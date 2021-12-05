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
  QuotePageTagContainer,
  QuotePageTagText,
  QuoteText,
  QuoteAuthorImage,
  AuthorImageOverLay,
  QuotePageDesktopActionButton,
  QuotePageDesktopButtonContainer
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
import 'react-lazy-load-image-component/src/effects/blur.css';
import { playVibrations } from './../../../../Utils/vibrations';
import { WrappedRowContainer } from './../../../../BennyStyleLibrary/Global/containerStyles';
import useGAEventTracker from './../../../../Utils/UIutils/useGAEventTracker';

const QuoteDisplay = () => {
  const {
    filteredQuotes: { filterQuotesList },
    displayIntroAnimation,
    displayActionButtons,
    displayOverlay,
    displayAuthorProfile,
    authorList,
    tagList
  } = useDisplayQuoteState();

  const dispatch = useDisplayQuoteDispatch();

  const GAEventsTracker = useGAEventTracker('QuoteDisplay');

  React.useEffect(() => {
    if (window.innerWidth > 768) {
      dispatch({ type: 'DQ_TOGGLE_ACTIONBUTTONS' });
    }
  }, [window.innerWidth]);

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

  const getQuoteTagName = tagId => {
    return tagList.filter(({ _id }) => _id === tagId)[0].tagName;
  };

  const getAuthorDetails = (authorId, detail) => {
    return authorList.filter(({ _id }) => _id === authorId)[0][detail];
  };

  return (
    <Div100vh>
      <QuotePageContainer>
        {authorList.length > 0 && filterQuotesList.length > 0 ? (
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
                        src={getAuthorDetails(
                          filterQuotesList[quoteIndex].author,
                          'authorImageUrl'
                        )}
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
                            GAEventsTracker(
                              'AuhtorMoreInfoCLicked',
                              getAuthorDetails(
                                filterQuotesList[quoteIndex].author,
                                'authorName'
                              )
                            );
                            playVibrations(6);
                            dispatch({ type: 'DQ_TOGGLE_AUTHORPROFILEDRAWER' });
                          }}
                        >
                          {makeFirstLetterUpperCase(
                            getAuthorDetails(
                              filterQuotesList[quoteIndex].author,
                              'authorName'
                            )
                          )}
                        </QuotePageTagText>
                        <CenterAlignedFlexStartColumnContainer
                          height="1px"
                          backgroundColor="rgba(255,255,255,0.9)"
                          width="98%"
                        ></CenterAlignedFlexStartColumnContainer>
                      </CenterAlignedColumnContainer>
                      {filterQuotesList[quoteIndex].tags.map((tag, index) => {
                        return (
                          <CenterAlignedColumnContainer marginTop="4px">
                            <QuotePageTagText key={index}>
                              | {makeFirstLetterUpperCase(getQuoteTagName(tag))}
                            </QuotePageTagText>
                            <CenterAlignedFlexStartColumnContainer
                              height="1px"
                              backgroundColor="rgba(255,255,255,0.9)"
                              width="80%"
                              marginLeft="8px"
                            ></CenterAlignedFlexStartColumnContainer>
                          </CenterAlignedColumnContainer>
                        );
                      })}
                    </QuotePageTagContainer>
                  </>
                )}
              </QuoteContainer>
            </AnimatePresence>
            <AnimatePresence>
              {displayAuthorProfile && (
                <AuthorInfoDrawer
                  authorImageUrl={
                    getAuthorDetails(
                      filterQuotesList[quoteIndex].author,
                      'authorImageUrl'
                    )
                    //filterQuotesList[quoteIndex].author['authorImageUrl']
                  }
                  authorBio={
                    getAuthorDetails(
                      filterQuotesList[quoteIndex].author,
                      'authorBio'
                    )
                    //filterQuotesList[quoteIndex].author['authorBio']}
                  }
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
                  currentAuthor={getAuthorDetails(
                    filterQuotesList[quoteIndex].author,
                    'authorName'
                  )}
                />
              )}
            </AnimatePresence>
            <>
              <FilterDrawer />
            </>
            <QuotePageDesktopButtonContainer width="100%">
              <WrappedRowContainer width="60%">
                <QuotePageDesktopActionButton
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  onClick={() => {
                    paginate(-1);
                  }}
                >
                  Previous
                </QuotePageDesktopActionButton>
                <QuotePageDesktopActionButton
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  onClick={() => {
                    paginate(1);
                  }}
                >
                  Next
                </QuotePageDesktopActionButton>
              </WrappedRowContainer>
            </QuotePageDesktopButtonContainer>
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
