import React, { useState } from 'react';
import * as Styled from './styles';

const Search = () => {

  const [results, setResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  
  return (
    <Styled.SearchContainer style={(searchActive) ? { display: 'none' } : {}}>

      <Styled.InputField
        type="text"
        placeholder="Quick search"
        onFocus={() => {}}
        onBlur={() => {}}
      />

      <Styled.ResultsBox style={(searchActive) ? { display: 'none' } : {}}>
        {results.map((result, index) => (
          <Styled.Result key={index} href={'/'}>
            <span className="searchbar__resulttype">{result.resultTypeText}</span>
            <span className="searchbar__resultname">{result.resultTitle}</span>
          </Styled.Result>
        ))}
        <Styled.NoResultsMsg style={(searchActive && results.length === 0) ? { display: 'none' } : {}}>
          No results found
        </Styled.NoResultsMsg>
      </Styled.ResultsBox>

    </Styled.SearchContainer>
  );

};

export default Search;