import { useState, useEffect } from "react";
import { fetchArticleComments } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import { updateComments } from "../utils/api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [posted, setPosted] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleComments(article_id)
      .then(comments => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch(err => err);
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleChange = event => {
    setNewComment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const commentObj = {
      author: "grumpy19",
      body: newComment,
    };

    updateComments(article_id, commentObj)
      .then(postedComment => {
        setComments(currComments => {
          const newComments = [postedComment, ...currComments];
          return newComments;
        });
        setNewComment("");
        setIsLoading(false);
        setPosted(true);
      })
      .catch(err => err);
  };

  return (
    <section className="section--comments__section">
      <h3>Comments</h3>
      <Link to={`/articles/${article_id}`}>back to article</Link>
      <form className="form--comment__post" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          id="commentToPost"
          rows="3"
          cols="40"
          placeholder="type comment here..."
          value={newComment}
          required
        ></input>
        <label htmlFor="commentToPost" />
        <button type="submit">Post</button>
        {posted ? <p>posted!</p> : null}
      </form>
      <div className="div--comment__container">
        <ul className="ul--comment__list">
          {comments.map(comment => (
            <li key={comment.comment_id} className="li--individual_comment">
              <h6 className="h6--comment__author">{comment.author}</h6>
              <p>{comment.body}</p>
              <p>{comment.created_at}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Comments;
