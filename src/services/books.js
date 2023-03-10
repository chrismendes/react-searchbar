const apiEndpoint = 'https://openlibrary.org/search.json?q=';
const configParams = '&fields=title,author_name,cover_i&page=';
const bookCoverEndpoint = 'https://covers.openlibrary.org/b/id/';
const bookCoverEndpointSuffix = '-M.jpg';
const amazonLinkPrefix = 'https://www.amazon.co.uk/s?i=stripbooks&k=';

export const fetchBooks = async (query, maxResults, page = 1) => {
  if (!query) return false;

  const queryEncoded = encodeQueryString(query);
  let url = apiEndpoint + queryEncoded + configParams + page;
  if (maxResults) {
    url = `${url}&limit=${maxResults}`
  }
  const response = await fetch(url);
  const data = await response.json();
  const books = data.docs;

  for (let i in books) {
    if (books[i]['author_name']) {
      books[i]['author_name'] = books[i]['author_name'][0] || null;
      const bookTitleEncoded = encodeQueryString(books[i]['title']);
      books[i]['link'] = amazonLinkPrefix + bookTitleEncoded;
    }
    const coverID = books[i]['cover_i'];
    if (coverID) {
      books[i]['image'] = bookCoverEndpoint + coverID + bookCoverEndpointSuffix;
    }
  }

  return books;
}

const encodeQueryString = (query) => {
  return query.toLowerCase().replaceAll(' ', '+');
}