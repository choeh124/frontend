import Header from "../Header";
import Footer from "../Footer";
import PostsCardList from "./PostsCradList";
import { useLocation, useNavigate  } from 'react-router-dom';
import { useEffect } from "react";


export default function PostsPage() {
    const navigate = useNavigate ();
    const location = useLocation();
    useEffect(() => {
      // URL에서 쿼리 스트링을 추출
      const queryParams = new URLSearchParams(location.search);

      const accesstoken = queryParams.get('accesstoken');
      const refreshtoken = queryParams.get('refreshtoken');
  
      window.sessionStorage.setItem("Authorization",accesstoken);
      window.sessionStorage.setItem("token",refreshtoken);

      // 쿼리 스트링 제거 (URL 업데이트)
      navigate({
        pathname: location.pathname,
        search: '',  // 쿼리 스트링 부분을 빈 문자열로 설정
      });
    }, [navigate, location]);

    

    
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
