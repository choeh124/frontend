
import "./Left.css"

export default function Left({data}){
const {title, image, createdAt, nickname} = data

    const endpoint = "https://stimgshortwalk.blob.core.windows.net/images/";
    const url = image ? endpoint +image : ""; // 이미지 URL 생성

    return(
        <div className="Lcontent">
            <div className="ImgBox">
                <img src={url} alt="" />
            </div>
            <div className="PostComment">
                <h2>{title}</h2>
                <p>{nickname}</p>
                <p>{createdAt.split("T")[0]}</p>
            </div>
        </div>
    )
}