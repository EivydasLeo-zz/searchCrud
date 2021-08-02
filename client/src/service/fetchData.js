import axios from 'axios';

// const ArticlesUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getArticles = async () => {
  try {
    const articlesResult = await axios.get(
      'https://gnews.io/api/v4/search?q=example&token=13f1dfe46e9a6b7a596663617aa3d84f&lang=en&max=9'
    );
    return articlesResult.data;
  } catch (err) {
    console.log(err);
  }
};
