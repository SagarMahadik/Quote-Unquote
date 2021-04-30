import React, { useRef } from 'react';
import {
  QuotationRight,
  QuotationLeft,
  QuoteContainer,
  QuotationSymbolText,
  QuoteText
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuote.js';
import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';
import html2canvas from 'html2canvas';
import { AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  PinterestIcon,
  VKIcon
} from 'react-share';

import LogoutButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/LogoutButton.js';
const DisplayQuote = () => {
  const { currentQuote, displayQuote } = useDisplayQuoteState();

  function base64StringtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
  function downloadBase64File(base64Data, filename) {
    var element = document.createElement('a');
    element.setAttribute('href', base64Data);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  const share = async function(shareimg, shareurl, sharetitle, sharetext) {
    try {
      const response = await fetch(shareimg);
      const blob = await response.blob();
      const file = new File([blob], 'rick.jpg', { type: blob.type });

      await navigator.share({
        url: shareurl,
        title: sharetitle,
        text: sharetext,
        files: [file]
      });
    } catch (err) {
      console.log(err.name, err.message);
    }
  };

  const printDocument = async () => {
    navigator
      .share({
        title: 'title',
        text: `${currentQuote[0].quote}`
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error in sharing', error));
  };

  return (
    <>
      <QuoteContainer id="divToPrint">
        <QuotationLeft>
          <QuotationSymbolText>&#8220;</QuotationSymbolText>
        </QuotationLeft>

        {currentQuote.length === 0 ? (
          <h1>Quote loading</h1>
        ) : (
          <AnimatePresence>
            {displayQuote ? (
              <AnimationContainer
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1
                }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.8
                }}
                exit={{ opacity: 0 }}
              >
                <QuoteText>{currentQuote[0].quote}</QuoteText>
              </AnimationContainer>
            ) : null}
          </AnimatePresence>
        )}
        <QuotationRight>
          <QuotationSymbolText>&#8221;</QuotationSymbolText>
        </QuotationRight>
      </QuoteContainer>
      {currentQuote.length > 0 ? (
        <WhatsappShareButton title={currentQuote[0].quote}>
          <WhatsappIcon size={'2.5rem'} />
        </WhatsappShareButton>
      ) : null}
      <LogoutButton onClick={printDocument} />
    </>
  );
};

export default DisplayQuote;
