import axios from 'axios';

const ApiUrl =
  'https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=9&apiKey=e1e42df6828e414da5dad854ea26b135';

const mongooDb = 'http://localhost:4000/search_history';

const reqOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

export const getArticles = async (searchingFor) => {
  try {
    const articlesResult = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=${searchingFor}&pageSize=9&apiKey=e1e42df6828e414da5dad854ea26b135`
    );
    return articlesResult.data;
  } catch (err) {
    console.log(err);
  }
};

export const newSearch = async (value) => {
  try {
    const res = await fetch(`${mongooDb}/new`, {
      method: 'POST',
      body: JSON.stringify(value),
      ...reqOptions,
    });
    const result = await res.json();
    console.log('Search Saved ', result);
  } catch (err) {
    console.log('Error occured: ', err);
  }
};

export const getSearchResults = async () => {
  try {
    const articlesResult = await axios.get(mongooDb);
    return articlesResult.data;
  } catch (err) {
    console.log(err);
  }
};
