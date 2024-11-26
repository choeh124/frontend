import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./Group.css";
import GroupList from "./GroupList";

export default function GroupPage() {
    const navigate = useNavigate();
    const token = window.sessionStorage.getItem("Authorization");

    const handelCreateButtonClick = () => {
        navigate('/groups/create');
    }
    const handelUpdateButtonClick = () => {
        const id = ' ';
        const dataToSend = { id: '20a48593-e86b-45c3-ae65-c25df6374aff' };
        navigate(`/groups/${id}/update`, { state: dataToSend });
    }
    const handelDeleteButtonClick = () => {

    }



    return (
        <div>
            <Header />
            <div >
                <div >
                    <h1>내 그룹</h1>
                    <button onClick={handelUpdateButtonClick}>수정</button>
                    <button onClick={handelDeleteButtonClick}>삭제</button>
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