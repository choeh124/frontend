// import axios from "axios"
// import { useEffect, useState } from "react"
// import "./CommentList.css"
// import { useParams } from "react-router-dom"

// export default function CommentList(){
//     const [comments, setComments] = useState([]);
//     const {id} = useParams();

//     useEffect(()=>{
//         const findComments = async ()=>{
//             const response = await axios.get(`http://localhost:8000/api/posts/${id}/comments`,{
//             })
//             const data = response.data;
//             setComments(data);
//         };
//       findComments();

//     },[]);
//     // console.log(comments);

//     return(
//         <div className="commenList">
//             {comments.map((comment)=>{
//                 const {content, nickname, createdAt} = comments;
//                 return(
//                     <div>
//                     <h3>{content}</h3>
//                     <p>{nickname}</p>
//                     <p>{createdAt}.</p>
//                     </div> 
//                 )
//             })}

//         </div>
//     )
// }


