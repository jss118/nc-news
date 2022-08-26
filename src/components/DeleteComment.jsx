import { deleteComment } from "../utils/api";

const DeleteComment = ({ comment_id, setDeleted, setComments }) => {
  const handleClick = () => {
    deleteComment(comment_id).then(() => {
      setDeleted(true);
      setComments(comments => [...comments]);
    });
  };

  return (
    <button onClick={handleClick} className="button--delete__comment">
      X
    </button>
  );
};

export default DeleteComment;
