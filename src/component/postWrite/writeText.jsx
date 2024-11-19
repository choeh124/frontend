import './WriteText.css'

export default function WriteText(){
    return(
        <div className='WriteText'>
            <form action="">
                <div className='text-box'>
                    <input type="text" placeholder="제목을 입력해 주세요" />
                    <textarea className='content' type="text" placeholder="본문을 입력해 주세요"></textarea>
                    <div className='write-button-box'>
                        <button>취소</button>
                        <button>완료</button>
                    </div>
                </div>
            </form>
        </div>
    )
}