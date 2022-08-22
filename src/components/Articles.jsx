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
    <ul className="ul--articleCardList">
      {articleList.map(article => (
        <li key={article.article_id} className="li--articalCard__articleList">
          <h4>{article.title}</h4>
          <p className="p--author__articleCard">author: {article.author}</p>
          <p className="p--topic__articleCard">topic: {article.topic}</p>
          <p className="p--votes__articleCard">{article.votes} votes</p>
        </li>
      ))}
    </ul>
  );
};

export default Articles;
