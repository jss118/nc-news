import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticles } from "../utils/api";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();

  useEffect(() => {
    fetchArticles(topic_slug).then(articles => {
      setArticleList(articles);
      setIsLoading(false);
    });
  }, [articleList, topic_slug]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <ul className="ul--articleCardList">
      {articleList.map(article => (
        <Link to={`/articles/${article.article_id}`} key={article.article_id}>
          <li className="li--articalCard__articleList">
            <h4>{article.title}</h4>
            <p>author: {article.author}</p>
            <p>topic: {article.topic}</p>
            <p>{article.votes} votes</p>
            <p>comments({article.comment_count})</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Articles;
