import { deleteComment, fetchArticleComments } from "../utils/api";

const DeleteComment = ({ comment_id, setDeleted, setComments, article_id }) => {
  const handleClick = () => {
    deleteComment(comment_id).then(() => {
      setDeleted(true);
      fetchArticleComments(article_id).then(comments => setComments(comments));
    });
  };

  return (
    <button
      aria-label="delete comment"
      onClick={handleClick}
      className="button--delete__comment"
    >
      X
    </button>
  );
};

export default DeleteComment;
