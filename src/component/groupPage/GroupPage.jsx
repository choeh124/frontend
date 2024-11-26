import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./Group.css";

export default function GroupPage() {
    const navigate = useNavigate();
    const handelButtonClick = () => {
        //navigate('/group/create');
    }
    return (
        <div>
            <Header />
            <div >
                <div >
                    <h1>내 그룹</h1>
                </div>
                <div >
                    <h1>그룹 탐색</h1>
                    <button onClick={handelButtonClick}>그룹 생성</button>
                </div>
            </div>
            <Footer />

        </div>
    )
}