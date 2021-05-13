import React from 'react';
import { quotes } from '../../SeedData/quotes';

const Quotes = () => {
  function getQuotesByFilter(selectedTags, selectedAuthorName) {
    let quotesSelectedByTags = [];

    let quotesSelectedByAuthorNames = [];

    quotesSelectedByAuthorNames = selectedAuthorName
      .map(a => quotes.filter(quote => quote.author === a))
      .flat();

    quotesSelectedByTags = selectedTags
      .map(t => quotes.filter(quote => quote.tag.includes(t)))
      .flat();

    let finalArray = [...quotesSelectedByAuthorNames, ...quotesSelectedByTags];

    return [...new Set(finalArray)];
  }

  let selectedTags = ['humour', 'philosophy'];
  let selectedAuthors = ['Nassim Nicholas Taleb'];
  getQuotesByFilter(selectedTags, selectedAuthors);

  return <div></div>;
};

export default Quotes;
