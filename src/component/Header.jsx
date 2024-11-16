import './Header.css'

export default function Header(){
    return(
        <div>
            <nav>
                <h1>짧은 산책</h1>
                <div className='buttonBox'>
                    <button>채팅</button>
                    <button>로그아웃</button>
                    <button className='blue'>My Page<img src="" alt="" /></button>
                </div>
            </nav>
        </div>
        
    )
}