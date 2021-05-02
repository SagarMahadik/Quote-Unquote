import React, { useEffect, useRef } from 'react';
import FormSectionHeading from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js';
import InputTextBox from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputTextBox.js';
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';

import {
  DropDownOptionsContainer,
  DropDownOptionContainer,
  DropDownOptionLine1Text,
  DropDownOptionLine2Text
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormDropDownOptions/FormDropDownOptions.js';

import { ClearButtonContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormButtons/ClearStringButton.js';

import { makeFirstLetterUpperCase } from 'Utils/stringOperations.js';
import { CenterAlignedRowContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
const AuthorName = () => {
  const {
    authorSearch: { searchString, searchResults },
    applicationData: { authorList }
  } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();
  const authorNameRef = useRef();

  useEffect(() => {
    if (searchString === '') {
      {
        dispatch({
          type: 'CLEAR_SEARCHRESULTS',
          payload: []
        });
      }
    }
  }, [searchString]);

  const handleSearchText = e => {
    let string = e.currentTarget.value;

    {
      dispatch({
        type: 'UPDATE_SEARCHSTRING',
        payload: string
      });
    }

    let searchOptions = authorList
      .filter(
        author =>
          author.authorName.toLowerCase().indexOf(string.toLowerCase()) > -1
      )
      .slice(0, 4);

    {
      dispatch({
        type: 'UPDATE_SEARCHRESULTS',
        payload: searchOptions
      });
    }
  };

  const handleSearchItemClick = item => {
    let authorName = item.authorName;
    let authorID = item._id;

    {
      dispatch({
        type: 'SET_AUTHOR',
        payload: { authorName, authorID }
      });
    }
  };

  const handleClearAuthorNameField = () => {
    console.log('clear search');
    dispatch({
      type: 'AQ_RESET_AUTHOR'
    });
    console.log(authorNameRef.current.placeholder);
    authorNameRef.current.placeholder = 'Author Name';
  };

  const placeholderString = 'Author Name';

  return (
    <>
      <FormSectionHeading sectionName="Author" />
      <CenterAlignedRowContainer>
        <InputTextBox
          placeholderText={placeholderString}
          name="searchString"
          value={searchString}
          onChange={handleSearchText}
          onBlur={dispatch({
            type: 'UPDATE_SEARCHSTRING',
            payload: makeFirstLetterUpperCase(searchString)
          })}
          ref={authorNameRef}
        />
        <ClearButtonContainer onClick={handleClearAuthorNameField}>
          X
        </ClearButtonContainer>
      </CenterAlignedRowContainer>
      {searchResults.length > 0 ? (
        <DropDownOptionsContainer>
          {searchResults.map(result => {
            return (
              <DropDownOptionContainer
                onClick={() => handleSearchItemClick(result)}
              >
                <DropDownOptionLine1Text>
                  {result.authorName}
                </DropDownOptionLine1Text>
              </DropDownOptionContainer>
            );
          })}
        </DropDownOptionsContainer>
      ) : null}
    </>
  );
};

export default AuthorName;
