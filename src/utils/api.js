const axios = require("axios");

export const fetchArticles = () => {
  return axios
    .get("https://nc-articles-app.herokuapp.com/api/articles")
    .then(res => res.data);
};
