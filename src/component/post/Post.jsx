// git pull origin main 

import Header from "../Header";
import Footer from "../Footer";
import Left from "./Left";
import Right from "./Right";
import Pagination from "./Pagination";

export default function Post(){
    return(
        <div className="post" >
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