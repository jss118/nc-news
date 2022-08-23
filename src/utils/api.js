const axios = require("axios");

export const fetchArticles = topic_slug => {
  return axios
    .get("https://nc-articles-app.herokuapp.com/api/articles", {
      params: {
        topic: topic_slug,
      },
    })
    .then(res => res.data);
};

export const fetchTopics = () => {
  return axios
    .get("https://nc-articles-app.herokuapp.com/api/topics")
    .then(res => res.data);
};

export const fetchSingleArticle = article_id => {
  return axios
    .get(`https://nc-articles-app.herokuapp.com/api/articles/${article_id}`)
    .then(res => res.data);
};
