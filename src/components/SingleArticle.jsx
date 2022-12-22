import { useState, useEffect } from "react";
import { fetchSingleArticle } from "../utils/api";
import { useParams, Link } from "react-router-dom";
import { updateVote } from "../utils/api";
import Comments from "./Comments";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);
  const [commentsVisible, setCommentsVisible] = useState(false);
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

  const commentsToggle = () => {
    setCommentsVisible(boolean => !boolean);
  };

  return (
    <>
      <div className="div--singleArticle">
        <h2 className="h2--singleArticle">{article.title}</h2>
        <h5 className="h5--author__article">by {article.author}</h5>
        <p className="date--singleArticle">created on {article.created_at}</p>

        <p className="article--singleArticle">{article.body}</p>

        <section className="section--votes__section">
          <p>Votes: {article.votes + votes}</p>
          <button className="btn--upvote voteBtns" onClick={() => incVotes(1)}>
            Upvote
          </button>
          <button
            className="btn--downvote voteBtns"
            onClick={() => incVotes(-1)}
          >
            Downvote
          </button>
          {err ? <p>{err}</p> : null}
        </section>
        <button
          className="btn--comments__singleArticle"
          onClick={commentsToggle}
        >
          {commentsVisible ? "Hide" : "Show"} comments ({article.comment_count})
        </button>
        <div className="commentsContainer">
          {commentsVisible ? <Comments /> : null}
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
