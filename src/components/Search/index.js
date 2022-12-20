import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './styles';
import Spinner from '../Spinner';
import { fetchBooks } from '../../services/books';

const Search = () => {

  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearchInput, setDebouncedSearchInput] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const inputElement = useRef(null);
  const maxResults = 10;
  const minimumChar = 4;

  // Trigger search when user stops typing
  useEffect(() => {
    setResults([]);
    setDebouncedSearchInput('');
    if (searchInput.length >= minimumChar) {
      const timer = setTimeout(() => {
        setDebouncedSearchInput(searchInput);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [searchInput]);

  // Execute search
  useEffect(() => {
    if (debouncedSearchInput) {
      (async () => {
        setResultsLoading(true);
        const books = await fetchBooks(debouncedSearchInput, maxResults);
        setResults(books);
        setResultsLoading(false);
      })();
    }
  }, [debouncedSearchInput]);

  // Reset search on button click, set focus to input
  const clearSearch = () => {
    setResults([]);
    setSearchInput('');
    setDebouncedSearchInput('');
    inputElement.current.focus();
  };

  return (
    <Styled.SearchContainer>

      <Styled.InputFieldContainer showSearchIcon={searchInput.length === 0}>
        <Styled.CancelButton onClick={clearSearch} visible={searchInput.length > 0} />
        <Styled.InputField
          type="text"
          placeholder="Search for book titles or authors"
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setTimeout(() => setSearchActive(false), 70)} // Delay closing results box for links to work
          value={searchInput}
          ref={inputElement}
        />
      </Styled.InputFieldContainer>

      <Styled.ResultsBox open={searchActive}>
        {resultsLoading &&
          <Spinner />
        }
        {results.map((result, index) => (
          <Styled.Result href={result.link} target="_blank" key={index}>

            <Styled.ResultImageContainer>
              <Styled.ResultImage src={result.image || '/icon-book.gif'} alt={result.title} />
            </Styled.ResultImageContainer>

            <Styled.ResultDetailsContainer>
              {result.title &&
                <Styled.ResultTitle>{result.title}</Styled.ResultTitle>
              }
              {result.author_name &&
                <Styled.ResultAuthor>{result.author_name}</Styled.ResultAuthor>
              }
            </Styled.ResultDetailsContainer>

          </Styled.Result>
        ))}
        {!resultsLoading && debouncedSearchInput && results.length === 0 &&
          <Styled.FeedbackMessage>
            Sorry, no results were found.
          </Styled.FeedbackMessage>
        }
      </Styled.ResultsBox>

    </Styled.SearchContainer>
  );

};

export default Search;