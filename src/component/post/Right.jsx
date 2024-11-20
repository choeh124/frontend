import WriteComment from "./Rsidebar/WriteComment"
import CommentList from "./Rsidebar/CommentList"

export default function Right({data}){
    return(
        <div className="rightContent">
            <p>{data.content}</p>
            
            <WriteComment></WriteComment>
            <CommentList></CommentList>
        </div>
    )
}