export const newsAPI = (country, category = '') => {
  // const API_KEY = `b8d9a9b442fc48aabcf137820bf73751`;
  const API_KEY = `a47af42e19d84192a02423c34ea3a1a2`;

  let newsURL = `https://newsapi.org/v2/top-headlines?country=${country.toLowerCase()}&category=${category.toLowerCase()}&apiKey=${API_KEY}`;

  return newsURL;
};
