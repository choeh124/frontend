import WriteComment from "./commentsidebar/WriteComment";
import CommentList from "./commentsidebar/CommentList";
import './PostCommentContent.css'

export default function PostCommentContent({ data }) {
  return (
    <div className="PostCommentContent">
      <WriteComment></WriteComment>
      <CommentList></CommentList>
    </div>
  );
}
