import WriteComment from "./Rsidebar/WriteComment";
import CommentList from "./Rsidebar/CommentList";

export default function Right({ data }) {
  return (
    <div className="rightContent">
      <WriteComment></WriteComment>
      <CommentList></CommentList>
    </div>
  );
}
