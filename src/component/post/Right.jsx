import WriteComment from "./Rsidebar/WriteComment"
import CommentList from "./Rsidebar/CommentList"

export default function Right(){
    return(
        <div>
            <p>서울 숲에 다녀왔습니다. 공기가 너무 맑고 좋네요.<br/>
            같이 간 친구들도 너무 좋아했어요.</p>
            
            <WriteComment></WriteComment>
            <CommentList></CommentList>
        </div>
    )
}