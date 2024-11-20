import './EditImage.css'

export default function EditImage(){
    return(
        <div className='EditImage'>
          
            <div className='WimageBox'>
                <img src="./image/seoul-forest.svg" alt=""  />
                <p>이미지를 추가해 주세요</p>
            </div>
            <div className='WimageInfo'>
                <p>seoulsou</p>
                <p>2024. 10. 30</p>
            </div>
        </div>
    )
}