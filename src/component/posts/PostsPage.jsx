import Header from "../Header";
import Footer from "../Footer";
import PostsCardList from "./PostsCradList";
import { useLocation, useNavigate  } from 'react-router-dom';
import { useEffect } from "react";


export default function PostsPage() {
    const location = useLocation();
    useEffect(() => {
      // URL에서 쿼리 스트링을 추출
      const queryParams = new URLSearchParams(location.search);

      const accesstoken = queryParams.get('accesstoken');
      const refreshtoken = queryParams.get('refreshtoken');
      if(accesstoken || refreshtoken){
        window.sessionStorage.setItem("Authorization",accesstoken);
        window.sessionStorage.setItem("token",refreshtoken);
        window.location.href = "/posts"
      }
    
    }, []);

    

    
  return (
    <div className="posts">
      <Header></Header>
      <div className="Board">
        <PostsCardList></PostsCardList>
      </div>

      <Footer></Footer>
    </div>
  );
}
