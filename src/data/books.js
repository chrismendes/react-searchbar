const apiEndpoint = 'http://openlibrary.org/search.json?q=';
const configParams = '&limit=10&fields=title,author_name,cover_i';
const bookCoverEndpoint = 'https://covers.openlibrary.org/b/id/';
const bookCoverEndpointSuffix = '-M.jpg';

const encodeQueryString = (query) => {
  return query.toLowerCase().replaceAll(' ', '+');
}

export const fetchBooks = async (query) => {
  if (!query) return false;

  const urlParam = encodeQueryString(query);
  const url = apiEndpoint + urlParam + configParams;
  const response = await fetch(url);
  const data = await response.json();
  const books = data.docs;

  for (let i in books) {
    const coverID = books[i]['cover_i'];
    if (coverID) {
      books[i]['image'] = bookCoverEndpoint + coverID + bookCoverEndpointSuffix;
    }
  }

  return books;
}