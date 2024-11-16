import Header from "../Header";
import Footer from "../Footer";
import NoticeBoard from "./NoticeBorder";

export default function Posts(){
    return(
        <div className="posts">
            <Header></Header>
            <div className="cardList">
                <NoticeBoard></NoticeBoard>
            </div>
            <Footer></Footer>
        </div>
    )
}