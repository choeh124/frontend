import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./Group.css";
import GroupList from "./GroupList";
import MyGroupList from "./MyGroupList";

export default function GroupPage() {
    const navigate = useNavigate();

    const handelCreateButtonClick = () => {
        navigate('/groups/create');
    }

    return (
        <div>
            <Header />
            <div >
                <div >
                    <h1>내 그룹</h1>
                    <MyGroupList></MyGroupList>
                </div>
                <div >
                    <h1>그룹 탐색</h1>
                    <button onClick={handelCreateButtonClick}>그룹 생성</button>
                    <GroupList></GroupList>
                </div>
            </div>
            <Footer />

        </div>
    )
}