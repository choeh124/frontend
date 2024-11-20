import './EditText.css'

export default function EditText(){
    return(
        <div className='EditText'>
            <form action="">
                <div className='text-box'>
                    <input type="text" placeholder="제목을 입력해 주세요" />
                    <textarea className='content' type="text" placeholder="본문을 입력해 주세요"></textarea>
                    <div className='write-button-box'>
                        <button>취소</button>
                        <button>수정</button>
                    </div>
                </div>
            </form>
        </div>
    )
}