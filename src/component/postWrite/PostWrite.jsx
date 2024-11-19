import './PostWrite.css'
import Header from "../Header"
import Footer from "../Footer"
import WriteImage from "./WriteImage"
import WriteText from "./WriteText"

export default function PostWrite(){
    return(
        <div>
            <Header></Header>
                <div className="PostWrite">
                    <WriteImage></WriteImage>
                    <WriteText></WriteText>
                </div>
            <Footer></Footer>
        </div>
    )
}