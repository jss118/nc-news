const axios = require("axios");

export const fetchArticles = (topic_slug, sort, order) => {
  return axios
    .get("https://ncnews-backend.onrender.com/api/articles", {
      params: {
        topic: topic_slug,
        sort_by: sort,
        order: order,
      },
    })
    .then(res => res.data);
};

export const fetchTopics = () => {
  return axios
    .get("https://ncnews-backend.onrender.com/api/topics")
    .then(res => res.data);
};

export const fetchSingleArticle = article_id => {
  return axios
    .get(`https://ncnews-backend.onrender.com/api/articles/${article_id}`)
    .then(res => res.data);
};

export const updateVote = (article_id, inc_votes) => {
  return axios
    .patch(`https://ncnews-backend.onrender.com/api/articles/${article_id}`, {
      inc_votes,
    })
    .then(updateArticle => {
      return updateArticle.data;
    });
};

export const fetchArticleComments = article_id => {
  return axios
    .get(
      `https://ncnews-backend.onrender.com/api/articles/${article_id}/comments`
    )
    .then(comments => comments.data);
};

export const updateComments = (article_id, newComment) => {
  return axios
    .post(
      `https://ncnews-backend.onrender.com/api/articles/${article_id}/comments`,
      newComment
    )
    .then(postedComment => {
      return postedComment.data;
    });
};

export const deleteComment = comment_id => {
  return axios.delete(
    `https://ncnews-backend.onrender.com/api/comments/${comment_id}`
  );
};
