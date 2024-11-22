import "./PostImgContent.css";

export default function PostImgContent({ data }) {
  const { title, image, content, createdAt, nickname } = data;

  const endpoint = "https://stimgshortwalk.blob.core.windows.net/images/";
  const url = image ? endpoint + image : null; // 이미지 URL 생성

  return (
    <div className="PostImgContent">
      <div className="ImgBox">
        {url ? (
          <img src={url} alt="" />
        ) : (
          <div className="no-image">이미지 없음</div>
        )}
      </div>
      <div className="PostComment">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{nickname}</p>
        <p>{createdAt.split("T")[0]}</p>
      </div>
    </div>
  );
}
