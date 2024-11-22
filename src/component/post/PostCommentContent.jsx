import WriteComment from "./commentsidebar/WriteComment";
import CommentList from "./commentsidebar/CommentList";
import './PostCommentContent.css'

export default function PostCommentContent({ data }) {
  return (
    <div className="PostCommentContent">
      <button
        onClick={()=>{
          window.location.href = `/posts`;
        }}
      >
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.75 7.25L7.25 21.75M7.25 7.25L21.75 21.75" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>
      <WriteComment></WriteComment>
      <CommentList></CommentList>
    </div>
  );
}
