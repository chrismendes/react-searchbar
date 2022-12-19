import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './styles';
import Spinner from '../Spinner';
import { fetchBooks } from '../../data/books';

const Search = () => {

  const [fieldInputVal, setFieldInputVal] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const maxResults = 10;

  const [searchActive, setSearchActive] = useState(false);

  const [resultsLoading, setResultsLoading] = useState(false);
  const inputElement = useRef(null);
  const minimumChar = 4;


  // Trigger search when user stops typing
  useEffect(() => {
    setResults([]);
    setSearchQuery('');
    if (fieldInputVal.length >= minimumChar) {
      const timer = setTimeout(() => {
        setSearchQuery(fieldInputVal);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [fieldInputVal]);
  

  // Execute search
  useEffect(() => {
    if (searchQuery) {
      (async () => {
        setResultsLoading(true);
        const books = await fetchBooks(searchQuery, maxResults);
        setResults(books);
        setResultsLoading(false);
      })();
    }
  }, [searchQuery]);

  
  // Reset search on button click, set focus to input
  const clearSearch = () => {
    setFieldInputVal('');
    setSearchQuery('');
    setResults([]);
    inputElement.current.focus();
  };

  return (
    <Styled.SearchContainer>

      <Styled.InputFieldContainer showSearchIcon={fieldInputVal.length === 0}>
        <Styled.CancelButton onClick={clearSearch} visible={fieldInputVal.length > 0} />
        <Styled.InputField
          type="text"
          placeholder="Search for book titles or authors"
          onChange={(e) => setFieldInputVal(e.target.value)}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setTimeout(() => setSearchActive(false), 50)}
          value={fieldInputVal}
          ref={inputElement}
        />
      </Styled.InputFieldContainer>

      <Styled.ResultsBox style={(resultsLoading || searchActive) ? { display: 'block' } : {  }}>

        {resultsLoading &&
          <Spinner />
        }

        {results.map((result, index) => (
          <Styled.Result key={index} href={result.link} target="_blank">

            <Styled.ResultImageContainer>
              <Styled.ResultImage src={result.image || '/icon-book.gif'} alt={result.title} />
            </Styled.ResultImageContainer>

            <Styled.ResultDetailsContainer>
              <Styled.ResultTitle>{result.title}</Styled.ResultTitle>
              {result.author_name &&
                <Styled.ResultAuthor>{result.author_name}</Styled.ResultAuthor>
              }
            </Styled.ResultDetailsContainer>

          </Styled.Result>
        ))}
        
        {!resultsLoading && searchQuery && results.length === 0 &&
          <Styled.FeedbackMessage>
            Sorry, no results were found.
          </Styled.FeedbackMessage>
        }

      </Styled.ResultsBox>

    </Styled.SearchContainer>
  );

};

export default Search;