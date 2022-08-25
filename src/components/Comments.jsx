import { useState, useEffect } from "react";
import { fetchArticleComments } from "../utils/api";
import { Link, useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  useEffect(() => {
    fetchArticleComments(article_id).then(comments => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="section--comments__section">
      <h3>Comments</h3>
      <Link to={`/articles/${article_id}`}>back to article</Link>

      <form>
        <textarea
          rows="3"
          cols="40"
          placeholder="type comment here..."
        ></textarea>
        <button>Post</button>
      </form>
      <div className="div--comment__container">
        <ul className="ul--comment__list">
          {comments.map(comment => (
            <li className="li--individual_comment">
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
