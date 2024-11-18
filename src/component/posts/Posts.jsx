import Header from "../Header";
import Footer from "../Footer";
import Pagination from "../post/Pagination";
import CardList from "./PostsCradList";

export default function Posts(){
    return(
        <div className="posts">
            <Header></Header>
            <div className="Board">
                <CardList></CardList>
            </div>
            <Pagination></Pagination>
            <Footer></Footer>
        </div>
    )
}