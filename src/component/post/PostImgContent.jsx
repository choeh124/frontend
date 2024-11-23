import "./PostImgContent.css";
import axiosInstance from "../../axiosInstance";
import { useNavigate } from "react-router-dom";

export default function PostImgContent({ data }) {
  const { id: postId, title, image, content, createdAt, nickname, viewCount } = data;
  const navigate = useNavigate();

  const endpoint = 'https://stimgshortwalk.blob.core.windows.net/images/';
  const url = image ? endpoint + image : null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Debug postId
  console.log('Post ID for editing:', postId);

  return (
    <div className="PostImgContent">
      <div className="ImgBox">
        {url ? <img src={url} alt="" /> : <div className="no-image">이미지 없음</div>}
      </div>
      <div className="PostComment">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{nickname}</p>
        <p>{formatDate(createdAt)}</p>
        <p><span>👁️</span>{viewCount}</p>
      </div>
      <div className="PIButtonContent">
        <button onClick={() => navigate(`/post/edit/${postId}`)}>수정</button>
        <button
          onClick={async () => {
            if (window.confirm('정말로 삭제하시겠습니까?')) {
              try {
                await axiosInstance.delete(`/posts/${postId}`);
                alert('게시물이 삭제되었습니다.');
                navigate('/posts');
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
