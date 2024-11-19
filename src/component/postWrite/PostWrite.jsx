import Header from "../Header"
import Footer from "../Footer"
import WriteImage from "./writeImage"
import WriteText from "./writeText"

export default function PostWrite(){
    return(
        <div>
            <Header></Header>
                <div>
                    <WriteImage></WriteImage>
                    <WriteText></WriteText>
                </div>
            <Footer></Footer>
        </div>
    )
}