import './PostEdit.css'
import Header from '../Header'
import Footer from "../Footer"
import EditImage from './EditImage'
import EditText from './EditText'

export default function PostEdit(){
    return(
        <div>
             <Header></Header>
            <div className='container'>
                <div className="PostWrite">
                    <h2>게시글 수정하기</h2>
                    <div className='PWmain-content'>
                        <EditImage></EditImage>
                        <EditText></EditText>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}