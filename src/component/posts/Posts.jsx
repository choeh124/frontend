import Header from "../Header";
import Footer from "../Footer";
import Pagination from "../post/Pagination";
import PostsCardList from "./PostsCradList";

export default function Posts(){
    return(
        <div className="posts">
            <Header></Header>
            <div className="Board">
                <PostsCardList></PostsCardList>
            </div>
            <Pagination></Pagination>
            <Footer></Footer>
        </div>
    )
}