import Header from "../Header";
import Footer from "../Footer";
import Left from "./Left";
import Right from "./Right";
import Pagination from "./Rsidebar/Pagination";

export default function Post(){
    return(
        <div>
            <Header></Header>
            <div className="main-content">
                <Left></Left>
                <Right></Right>
            </div>
            <Pagination></Pagination>
            <Footer></Footer>
        </div>
        
    );
}