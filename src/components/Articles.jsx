import React, { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then(articles => {
      setArticleList(articles);
      setIsLoading(false);
    });
  }, [articleList]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {articleList.map(article => (
        <li key={article.article_id} className="li--articalCard__articleList">
          <h4>{article.title}</h4>
          <p>author: {article.author}</p>
          <p>topic: {article.topic}</p>
          <p>{article.votes} votes</p>
        </li>
      ))}
    </ul>
  );
};

export default Articles;
