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

  const [resultsBoxOpen, showResultsBox] = useState(false);
  const [resultsLoading, setResultsLoading] = useState(false);
  const inputElement = useRef(null);
  const minimumChar = 4;


  // Trigger search when user stops typing
  useEffect(() => {
    if (fieldInputVal.length >= minimumChar) {
      showResultsBox(true);
      const timer = setTimeout(() => {
        setSearchQuery(fieldInputVal)
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      showResultsBox(false);
    }
  }, [fieldInputVal])
  

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
  

  return (
    <Styled.SearchContainer>

      <Styled.InputField
        type="text"
        placeholder="Quick search"
        onChange={(e) => setFieldInputVal(e.target.value)}
        onFocus={() => setSearchActive(true)}
        onBlur={() => setSearchActive(false)}
        ref={inputElement}
      />

      <Styled.ResultsBox style={(resultsBoxOpen) ? {} : { display: 'none' }}>

        {resultsLoading &&
          <Spinner />
        }

        {results.map((result, index) => (
          <Styled.Result key={index} href={'/'} target="_blank">

            <Styled.ResultImageContainer>
              <Styled.ResultImage src={result.image || '/icon-book.gif'} alt={result.title} />
            </Styled.ResultImageContainer>
            <span>{result.title}</span>

          </Styled.Result>
        ))}
        
        {!resultsLoading && results.length === 0 &&
          <Styled.NoResultsMsg>
            No results found
          </Styled.NoResultsMsg>
        }

      </Styled.ResultsBox>

    </Styled.SearchContainer>
  );

};

export default Search;