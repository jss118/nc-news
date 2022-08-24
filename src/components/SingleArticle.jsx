import { useState, useEffect } from "react";
import { fetchSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import { updateVote } from "../utils/api";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);
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

  const incVotes = inc_votes => {
    setVotes(currVotes => currVotes + inc_votes);
    updateVote(article_id, inc_votes)
      .then(updateArticle => {
        setVotes(0);
        setArticle(updateArticle);
        setErr(null);
      })
      .catch(err => {
        setVotes(0);
        setErr(err.message);
      });
  };

  return (
    <>
      <article>
        <h2>{article.title}</h2>
        <h5 className="h5--author__article">by {article.author}</h5>
        <p>{article.body}</p>
        <p>created on {article.created_at}</p>
      </article>
      <section>
        <p>Votes: {article.votes + votes}</p>
        <button onClick={() => incVotes(1)}>Upvote</button>
        <button onClick={() => incVotes(-1)}>Downvote</button>
        {err ? <p>{err}</p> : null}
      </section>
    </>
  );
};

export default SingleArticle;
