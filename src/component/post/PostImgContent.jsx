//PostImgContent.jsx
//<Route path="/posts/edit/:id" element={<PostEdit />} />
import "./PostImgContent.css";

import axios from 'axios'; // axios를 import

export default function PostImgContent({ data }) {
  const { id: postId, title, image, content, createdAt, nickname, viewCount } = data;

  const endpoint = 'https://stimgshortwalk.blob.core.windows.net/images/';
  const url = image ? endpoint + image : null;
  const authorization = window.sessionStorage.getItem('Authorization'); // 인증 토큰 가져오기

  return (
    <div className="PostImgContent">
      <div className="ImgBox">
        {url ? <img src={url} alt="" /> : <div className="no-image">이미지 없음</div>}
      </div>
      <div className="PostComment">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{nickname}</p>
        <p>{createdAt.split('T')[0]}</p>
        <p><span>👁️</span>{viewCount}</p>
      </div>
      <div className="PIButtonContent">
        <button
          onClick={() => {
            window.location.href = `/posts/edit/${postId}`; // 수정 페이지로 이동
          }}
        >
          수정
        </button>
        <button
          onClick={async () => {
            if (window.confirm('정말로 삭제하시겠습니까?')) {
              try {
                await axios.delete(`http://localhost:8000/api/posts/${postId}`, {
                  headers: {
                    Authorization: authorization,
                  },
                });
                alert('게시물이 삭제되었습니다.');
                window.location.href = '/posts'; // 게시물 목록으로 이동
              } catch (error) {
                console.error('삭제 실패:', error);
                alert('게시물 삭제에 실패했습니다.');
              }
            }
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
