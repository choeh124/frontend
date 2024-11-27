import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import GroupList from "./GroupList";
import MyGroupList from "./MyGroupList";
import "./GroupPage.css";

export default function GroupPage() {
  const navigate = useNavigate();

  const handelCreateButtonClick = () => {
    navigate("/groups/create");
  };

  return (
    <div>
      <Header />
      <div className="group-container">
        <div className="group-outer-box">
          <h1>내 그룹</h1>
          <MyGroupList></MyGroupList>
        </div>
        <div className="group-outer-box">
          <h1>그룹 탐색</h1>
          <button onClick={handelCreateButtonClick}>그룹 생성</button>
          <GroupList></GroupList>
        </div>
      </div>
      <Footer />
    </div>
  );
}
