const apiEndpoint = 'http://openlibrary.org/search.json?q=';
const configParams = '&fields=title,author_name,cover_i';
const bookCoverEndpoint = 'https://covers.openlibrary.org/b/id/';
const bookCoverEndpointSuffix = '-M.jpg';

const encodeQueryString = (query) => {
  return query.toLowerCase().replaceAll(' ', '+');
}

export const fetchBooks = async (query, maxResults) => {
  if (!query) return false;

  const urlParam = encodeQueryString(query);
  let url = apiEndpoint + urlParam + configParams;
  if (maxResults) {
    url = `${url}&limit=${maxResults}`
  }
  const response = await fetch(url);
  const data = await response.json();
  const books = data.docs;

  for (let i in books) {
    if (books[i]['author_name']) {
      books[i]['author_name'] = books[i]['author_name'][0] || null;
    }
    const coverID = books[i]['cover_i'];
    if (coverID) {
      books[i]['image'] = bookCoverEndpoint + coverID + bookCoverEndpointSuffix;
    }
  }

  return books;
}