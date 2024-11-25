// import WriteComment from "./commentsidebar/WriteComment";
// import CommentList from "./commentsidebar/CommentList";
import './PostCommentContent.css'
import './commentsidebar/WriteComment.css'
import './commentsidebar/CommentList.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function PostCommentContent() {
  const {id} = useParams();
  const authorization = window.sessionStorage.getItem("Authorization")

  const [content, setContent] = useState(""); //댓글입력 상태
  const [comments, setComments] = useState([]);//댓글목록 상태

    //===댓글 입력창===
    const handleSubmin = (e)=>{
        e.preventDefault();
        if (!content) {
            alert("댓글 내용을 입력해주세요."); // 빈 댓글 방지
            return;
        };

        try{
            const commentwite = async ()=>{
                const response = await axios.post(`http://localhost:8000/api/posts/${id}/comments`,
                    {content},
                    {
                        headers:{
                            Authorization : authorization
                        },
                    }
                );
                setContent("");
                // console.log("작성된 댓글:",data);
            };

            setComments([...comments]);;
            commentwite();
        }catch(error){};
        
    }

    //===댓글 목록===
    useEffect(()=>{
        const findComments = async ()=>{
          try{
            const response = await axios.get(`http://localhost:8000/api/posts/${id}/comments`,{
            })
            setComments(response.data);
          }catch(error){};
        };
        findComments();
      },[content]);


  return (
    <div className="PostCommentContent">

      {/* ====뒤로가기버튼==== */}
      <button
        onClick={()=>{
          window.location.href = `/posts`;
        }}
      >
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.75 7.25L7.25 21.75M7.25 7.25L21.75 21.75" stroke="#F5F5F5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      {/* ====댓글쓰기==== */}
      <div className="WriteContent">
            <form onSubmit={handleSubmin}>
                <input 
                    value={content} 
                    type="text"  
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="댓글을 작성해 주세요."
                />
                <button type="submit">작성</button>
            </form>
        </div>
        
        {/* ====댓글목록===수정=삭제==== */}
        <div className="CommentList">
            {comments.map((comm)=>{
                const {content, nickname, createdAt} = comm;
                return(
                    <div className='CommentListContent'>
                      {/* {console.log(`댓글id ${comm.id}`)} */}
                      {/* {console.log(`post ${id}`)} */}
                      {console.log(`http://localhost:8000/api/posts/${id}/comments/${comm.id}`)}
                      <div className='CLCdetail'>
                        <h3>{content}</h3>
                        <p>{nickname}</p>
                        <p>{createdAt.split("T")[0]}</p>
                      </div>
                      <div className='CLCbutton'>
                        <button className='CLCReportComment'>
                          신고
                        </button>
                        {/* =====댓글수정 */}
                        <button
                         
                        >수정</button>
                        {/* =====댓글삭제 */}
                        <button
                        onClick={async () =>{
                          if(window.confirm("댓글을 삭제하시겠습니까?")){
                            try{
                              await axios.delete(`http://localhost:8000/api/posts/${id}/comments/${comm.id}`,{
                                headers: {
                                  Authorization: authorization
                                },
                              });
                              setComments(comments.filter((comment) => comment.id !== comm.id));
                            }catch(error){}
                          }
                         }}
                        >삭제</button>
                      </div>
                    </div> 
                    
                )
            })}
        </div>
    </div>
  );
}
