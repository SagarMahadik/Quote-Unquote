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

  const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  const printDocument = async () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then(canvas => {
      let imgWidth = 208;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL('img/png');
      console.log(imgData.split(',').pop());
      const blob = b64toBlob(imgData.split(',').pop(), 'img/png');

      const file = new File([blob], 'fileName.png', { type: blob.type });
      console.log(file);
      navigator
        .share({
          title: 'title',
          text: `${currentQuote[0].quote}`,
          files: [file]
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error in sharing', error));
    });
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

      <LogoutButton onClick={printDocument} />
    </>
  );
};

export default DisplayQuote;
