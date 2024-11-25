// import axios from "axios";
// import "./WriteComment.css"
// import { useParams } from "react-router-dom";
// import { useState } from "react";

// export default function WriteComment(){
//     const [content, setContent] = useState("");
//     const {id} = useParams();
//     const authorization = window.sessionStorage.getItem("Authorization")

//     const handleSubmin = (e)=>{
//         e.preventDefault();
//         if (!content.trim()) {
//             alert("댓글 내용을 입력해주세요."); // 빈 댓글 방지
//             return;
//         }

//         try{
//             const commentwite = async ()=>{
//                 const response = await axios.post(`http://localhost:8000/api/posts/${id}/comments`,
//                     {content},
//                     {
//                         headers:{
//                             Authorization : authorization
//                         },
//                     }
//                 );
//                 console.log("작성된 댓글:", response.data);
//             };
//             // alert("댓글이 작성되었습니다."); // 성공 알림
//             // setContent(""); // 입력 필드 초기화
//         }catch(error){

//         }

//     }

//     return(
//         <div className="WriteContent">
//             <form onSubmit={handleSubmin}>
//                 <input 
//                     value={content} 
//                     type="text"  
//                     onChange={(e) => setContent(e.target.value)}
//                     placeholder="댓글을 작성해 주세요."
//                 />
//                 <button type="submit">작성</button>
//             </form>
//         </div>
//     )
// }