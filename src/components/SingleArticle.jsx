import { useState, useEffect } from "react";
import { fetchSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchSingleArticle(article_id).then(singleArticle => {
      setArticle(singleArticle);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(article);
  return (
    <>
      <article>
        <h2>{article.title}</h2>
        <h5 className="h5--author__article">by {article.author}</h5>
        <p>{article.body}</p>
        <p>created on {article.created_at}</p>
      </article>
      <section>
        <p>Votes: {article.votes}</p>
        <button>good</button> <button>bad</button>
      </section>
    </>
  );
};

export default SingleArticle;
