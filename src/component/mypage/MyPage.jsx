import Header from "../Header";
import Footer from "../Footer";
import Chart from "./Chart";
import "./MyPage.css";
export default function MyPage() {
  return (
    <div>
      <Header />
      <div className="container">
        <iframe src="map.html" title="Tmap Map" allowfullscreen></iframe>
        <Chart />
        <div className="button-box">
          <button
            className="user-edit-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/user/edit";
            }}
          >
            회원 정보 수정
          </button>
          <button className="user-delete-btn">회원 탈퇴</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
