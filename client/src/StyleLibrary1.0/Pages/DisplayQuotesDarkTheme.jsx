import React, { useState } from 'react';

import {
  CenterAlignedColumnContainer,
  QuoteContainer,
  IconsContainer,
  TagContainer,
  TagText,
  QuotePageOverlay,
  AuthorProfileContainer,
  AuthorProfileInformationContainer,
  AuthorProfileImage
} from './../Atoms/containerStyles';

import FilterIcon from './../Icons/FilterIcon';
import ShareIcon from './../Icons/ShareIcon';
import CloseIcon from './../Icons/CloseIcon';
import { AnimatePresence } from 'framer-motion';
import { displayQuoteTheme } from './../Theme/displayQuoteTheme';
import { quoteSeed } from './../Seed/quoteSeed';
import { wrap } from 'popmotion';
import { useDoubleTap } from 'use-double-tap';
import FilterComponent from './FilterComponent';

const DisplayQuotesDarkTheme = () => {
  const getRandomIndex = () => {
    return Math.floor(Math.random() * displayQuoteTheme.length);
  };

  const [displayAuthorProfile, setDisplayAuthorProfile] = React.useState(false);
  const [themeIndex, setThemeIndex] = React.useState(getRandomIndex());
  const [displayButton, setDisplayButton] = React.useState(false);
  const [displayOverlay, setDisplayOverlay] = React.useState(false);

  const variants = {
    enter: direction => {
      console.log(direction);
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
    console.log(Math.abs(offset) * velocity);

    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const quoteIndex = wrap(0, quoteSeed.length, page);

  const paginate = newDirection => {
    console.log(newDirection);
    setPage([page + newDirection, newDirection]);
  };

  const bind = useDoubleTap(event => {
    // Your action here
    setDisplayButton(!displayButton);
  });

  const [filterComponentDisplay, setFilterComponentDisplay] = useState(false);

  const printDocument = async () => {
    navigator
      .share({
        title: 'title'
        //text: `${currentQuote[0].quote}-${currentQuote[0].author['authorName']}`
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error in sharing', error));
  };

  return (
    <CenterAlignedColumnContainer
      backgroundColor={`radial-gradient(103.04% 56.47% at 49.87% 50%, ${displayQuoteTheme[themeIndex].primaryColor} 30.25%, ${displayQuoteTheme[themeIndex].secondaryColor} 100%)`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence>
        {displayAuthorProfile ||
          (displayOverlay && (
            <QuotePageOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              exit={{ opacity: 0 }}
            />
          ))}
      </AnimatePresence>
      <AnimatePresence initial={false} custom={direction}>
        <QuoteContainer
          key={page}
          //src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 20 },
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
          {quoteSeed[quoteIndex].quote}
          <TagContainer>
            <TagText onClick={() => setDisplayAuthorProfile(true)}>
              {quoteSeed[quoteIndex].author}
            </TagText>
            <h3 style={{ color: 'rgba(255,255,255,0.8)' }}>|</h3>
            <TagText>{quoteSeed[quoteIndex].tag1}</TagText>
            <h3 style={{ color: 'rgba(255,255,255,0.8)' }}>|</h3>
            <TagText>{quoteSeed[quoteIndex].tag2}</TagText>
          </TagContainer>
        </QuoteContainer>
      </AnimatePresence>
      <AnimatePresence>
        {displayButton && (
          <IconsContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0 }}
          >
            <FilterIcon
              onClick={() => {
                setDisplayOverlay(true);
                setFilterComponentDisplay(!filterComponentDisplay);
              }}
            />
            <ShareIcon onClick={() => printDocument()} />
          </IconsContainer>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {filterComponentDisplay && (
          <FilterComponent
            setFilterComponentDisplay={setFilterComponentDisplay}
            setDisplayOverlay={setDisplayOverlay}
            displayQuoteTheme={displayQuoteTheme}
            themeIndex={themeIndex}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {displayAuthorProfile && (
          <AuthorProfileContainer
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: 200 }}
            backgroundColor={`radial-gradient(51.33% 74.07% at 48.67% 46.39%, ${displayQuoteTheme[themeIndex].primaryColor} 0%,${displayQuoteTheme[themeIndex].secondaryColor} 100%)`}
          >
            <CloseIcon
              style={{
                position: 'relative',
                left: '42%',
                top: '20px'
              }}
              onClick={() => setDisplayAuthorProfile(false)}
              width="80px"
              height="80px"
            />
            <a
              style={{
                margin: '0',
                padding: '0',
                outline: 'none',
                textDecoration: 'none',
                border: 'none'
              }}
              href="https://en.wikipedia.org/wiki/Nassim_Nicholas_Taleb"
            >
              <AuthorProfileImage src="https://res.cloudinary.com/antilibrary/image/upload/v1585376256/Antilibrary/220px-Taleb_mug_tvhdqa.jpg"></AuthorProfileImage>
            </a>
            <AuthorProfileInformationContainer>
              Gerald Marvin Weinberg (October 27, 1933 – August 7, 2018) was an
              American computer scientist, author and teacher of the psychology
              and anthropology of computer software development.
            </AuthorProfileInformationContainer>
          </AuthorProfileContainer>
        )}
      </AnimatePresence>
    </CenterAlignedColumnContainer>
  );
};

export default DisplayQuotesDarkTheme;
