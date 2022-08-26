import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticles } from "../utils/api";
import SortBy from "./SortBy";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState();
  const [order, setOrder] = useState("desc");
  const { topic_slug } = useParams();

  useEffect(() => {
    fetchArticles(topic_slug, sort, order)
      .then(articles => {
        setArticleList(articles);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [topic_slug, sort, order]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <SortBy setSort={setSort} setOrder={setOrder} />
      <ul className="ul--articleCardList">
        {articleList.map(article => (
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <li className="li--articalCard__articleList">
              <h4>{article.title}</h4>
              <p>author: {article.author}</p>
              <p>topic: {article.topic}</p>
              <p>{article.votes} votes</p>
              <p>{article.comment_count} comments</p>
              <p>created: {article.created_at}</p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
