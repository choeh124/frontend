import './PostWrite.css'
import Header from "../Header"
import Footer from "../Footer"
import WriteImage from "./WriteImage"
import WriteText from "./WriteText"

export default function PostWrite(){
    return(
        <div>
            <Header></Header>
            <div className='container'>
                <div className="PostWrite">
                    <h2>게시글 작성하기</h2>
                    <div className='PWmain-content'>
                        <WriteImage></WriteImage>
                        <WriteText></WriteText>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}