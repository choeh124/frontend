import "./WriteComment.css"

export default function WriteComment(){
    return(
        <div className="WriteContent">
            <form action="">
                <input type="text"  placeholder="댓글을 작성해 주세요."/>
                <button>작성</button>
            </form>
        </div>
    )
}